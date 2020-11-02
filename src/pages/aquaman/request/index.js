import React, { useEffect, useState } from 'react'
import { Layout2, AvailableServices } from '../index'
import { withPrefix } from 'gatsby'
import styles from './request.module.css'
import { useForm } from 'react-hook-form'
export default () => {

    const [serviceName, setServiceName] = useState()

    const { register, handleSubmit, errors } = useForm()

    useEffect(() => {
        const queryString = window.location.search

        const urlParams = new URLSearchParams(queryString)

        const service = urlParams.get('service')

        setServiceName(service)
    }, [])

    const onSubmit = (data) => {
        console.log(data)

        MakeRequest({
            serviceName: serviceName,
            phoneNum: data.phoneNum.replace("-",""),
            address: data.address,
            extraAddress: data.extraAddress,
            memo: data.memo
        })
    }

    return (
        <Layout2>
            {
                serviceName ?
                    <div className={styles.requested_service}>
                        <img src={withPrefix(`/aquaman/${serviceName}.jpg`)} />
                        <h2 className={styles.service_name}>{serviceName}</h2>
                        <div className={styles.cost_container}>
                            <p className={styles.cost}>비용 <strong>{serviceInfo[serviceName].installCost}</strong></p>
                            <p className={styles.cost}>출장/견적/현장점검 <strong>{serviceInfo[serviceName].defaultCost}</strong></p>
                            <p className={styles.cost_caption}>* 해당 작업 외, 추가시공 진행 시 추가비 발생</p>
                            <p className={styles.total_cost}>예상비용 <strong>{serviceInfo[serviceName].totalCost}</strong></p>
                        </div>

                        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                            <label htmlFor={"address"}>주소</label>
                            <input placeholder={"시/군/구"} type="text" name={"address"} ref={register} />

                            <label htmlFor={"address"}>나머지주소</label>
                            <input placeholder={""} type="text" name={"extraAddress"} ref={register} />

                            <label htmlFor={"phoneNum"}>휴대전화</label>
                            <input placeholder={"- 없이 숫자만 입력해주세요"} type="text" name={"phoneNum"} ref={register({required: true})} />

                            <label htmlFor={"memo"}>남기실 말씀</label>
                            <input type="text" name={"memo"} ref={register} />

                            <p>
                                아래 버튼을 클릭하시면 서비스 신청이 완료되며 <a href={"https://api1.hellomy.house/privacy.html"}>개인정보처리방침</a>과 <a href={"https://api1.hellomy.house/usage.html"}>이용약관</a>에 동의하는 것입니다
                            </p>

                            {errors.phoneNum ? <p className={styles.error}>휴대전화 번호를 입력해주세요</p> : null}
                            <button type="submit">전문가 매칭 시작</button>
                        </form>
                    </div>
                    :
                    <AvailableServices title={"서비스를 선택해주세요"} />
            }
        </Layout2>
    )
}

const MakeRequest = ({ serviceName, phoneNum, address, extraAddress, memo }) => {

    const endpoint = "https://api1.hellomy.house/graphql";
    const query = `mutation { 
                requestConsulting(
                    serviceName: "${serviceName}",
                    mainAddr: "${address}",
                    subAddr: "${extraAddress}", 
                    phoneNum: "${phoneNum}",
                    memo: "${memo}")
                }`

    try {
        fetch(endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query: query })
        }).then((d) => {
            d.json()
        }).then(res => { 
            window.location = "/aquaman"
        })
    } catch (e) {
        console.log(e)
    }
}

const serviceInfo = {
    "수전설치": {
        installCost: "25,000원",
        defaultCost: "무료",
        totalCost: "25,000원"
    },
    "수전교체": {
        installCost: "25,000원",
        defaultCost: "무료",
        totalCost: "25,000원"
    },
    "수전수리": {
        installCost: "25,000원",
        defaultCost: "무료",
        totalCost: "25,000원"
    },
    "주방배관막힘": {
        installCost: "25,000원",
        defaultCost: "무료",
        totalCost: "25,000원"
    },
    "배수구수리": {
        installCost: "60,000원",
        defaultCost: "무료",
        totalCost: "60,000원"
    },
    "누수": {
        installCost: "방문후 책정",
        defaultCost: "사전 상담 후 무료여부 결정",
        totalCost: "방문후 책정"
    },
}