import React from 'react'
import styles from './aquaman.module.css'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
export default () => {
    return (
        <Layout>
            <Helmet
                link={[
                    {
                        rel: `stylesheet`,
                        href: "https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap"
                    }
                ]}
                title={"아쿠아맨"}
                titleTemplate={`아쿠아맨`}
                meta={[
                    {
                        name: `og:image`,
                        content: `/aquaman/aquaman_og.png`
                    },
                    {
                        name: `description`,
                        content: "매칭 후 30분안에 찾아가는 당신만의 맥가이버, 아쿠아맨",
                    },
                    {
                        property: `og:title`,
                        content: '아쿠아맨',
                    },
                    {
                        property: `og:description`,
                        content: '매칭 후 30분안에 찾아가는 당신만의 맥가이버, 아쿠아맨',
                    },
                    {
                        property: `og:type`,
                        content: `website`,
                    },
                    {
                        name: `twitter:card`,
                        content: `summary`,
                    },
                    {
                        name: `twitter:title`,
                        content: '아쿠아맨',
                    },
                    {
                        name: `twitter:description`,
                        content: '매칭 후 30분안에 찾아가는 당신만의 맥가이버, 아쿠아맨',
                    },
                ]}
            >
                <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap" rel="stylesheet" />
                <link rel="shortcut icon" href="/aquaman/aquaman_og.png" />
                <link rel="apple-touch-icon" href="/aquaman/aquaman_og.png" />
                <link rel="apple-touch-icon" href="/aquaman/aquaman_og.png" />
                <link rel="apple-touch-icon" href="/aquaman/aquaman_og.png" />
                <link rel="apple-touch-icon" href="/aquaman/aquaman_og.png" />
                <link rel="canonical" href="https://corp.hellomy.house/aquaman" />
                <meta property="og:title" content="30분안에 찾아가는 당신만의 맥가이버, 아쿠아맨" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://corp.hellomy.house/aquaman" />
                <meta property="og:image" content="/aquaman/aquaman_og.png" />
                <meta property="og:description" content="30분안에 찾아가는 당신만의 맥가이버, 아쿠아맨을 만나보세요." />
                <meta name="description" content="30분안에 찾아가는 당신만의 맥가이버, 아쿠아맨을 만나보세요." />
                <meta name="NaverBot" content="All" />
                <meta name="NaverBot" content="index,follow" />
                <meta name="Yeti" content="All" />
                <meta name="Yeti" content="index,follow" />
                <meta name="googlebot" content="All" />
                <meta name="googlebot" content="index,follow" />
            </Helmet>
            <MainBanner />
            <AvailableServices />
            <About />
            <Why />
            <Reviews />
            <CompanyRegistration />
        </Layout>
    )
}

const CompanyRegistration = () => {
    return (
        <div className={styles.registration}>
            <h4>협력업체 지원하기</h4>
            <p>아쿠아맨의 헙력업체가 되어서<br />고객님들의 불편을 같이 해결해보아요</p>
            <a href={"https://docs.google.com/forms/d/e/1FAIpQLSeAcEUyrdmBrMiCMoOVbG0sIyUNqcdLMTX_ZTKvWQ8Ip9KPag/viewform"}>{"지원하기 \>"}</a>
        </div>
    )
}

const MainBanner = () => {
    return (
        <div className={styles.main_banner}>
            <h1 className={styles.main_title}>아쿠아맨</h1>
            <p className={styles.main_desc}>
                집에 문제가 발생했나요?<br />
                매칭 후 30분 내로 찾아가는<br />
                당신만의 맥가이버<br />
            </p>
            <a className={styles.main_link} href={"#about"}>
                {
                    "자세히 알아보기 \>"
                }
            </a>
        </div>
    )
}

export const AvailableServices = ({ title = "이용가능한 서비스" }) => {
    return (
        <div className={styles.available_services}>
            <h4>{title}</h4>
            <div>
                {
                    services.map(s => {
                        return (
                            <ServiceCard
                                service={s}
                            />
                        )
                    })
                }
            </div>

        </div>
    )
}

const About = () => {
    return (
        <div className={styles.about} id={"about"}>
            <h3>지금, 아쿠아맨에서는</h3>
            <h2>
                출장비 무료<br />
                시설 점검 무료<br />
                견적 무료<br />
            </h2>
            <p>
                누수, 배관, 수전 문제가 발생했을때
                기사님 출장시 지불하는 비용이 부담스러우셨죠?
                이제  부담없이  전문가의 무료 실측을 받으세요.
                시공후엔 온라인으로 편리한 결제가 가능합니다.
            </p>
            <div className={styles.caption}>
                * 누수의 경우 사전 상담 후 무료여부 결정
            </div>
        </div>
    )
}

const Why = () => {
    return (
        <div className={styles.why}>
            <h3>왜 아쿠아맨인가요?</h3>
            <div className={styles.factor}>
                <svg height="16pt" viewBox="0 -21 512.016 512" width="16pt" xmlns="http://www.w3.org/2000/svg"><path d="m234.667969 469.339844c-129.386719 0-234.667969-105.277344-234.667969-234.664063s105.28125-234.6679685 234.667969-234.6679685c44.992187 0 88.765625 12.8203125 126.589843 37.0976565 7.425782 4.78125 9.601563 14.679687 4.820313 22.125-4.796875 7.445312-14.675781 9.597656-22.121094 4.820312-32.640625-20.972656-70.441406-32.042969-109.289062-32.042969-111.746094 0-202.667969 90.921876-202.667969 202.667969 0 111.742188 90.921875 202.664063 202.667969 202.664063 111.742187 0 202.664062-90.921875 202.664062-202.664063 0-6.679687-.320312-13.292969-.9375-19.796875-.851562-8.8125 5.589844-16.621094 14.378907-17.472656 8.832031-.8125 16.617187 5.589844 17.472656 14.378906.722656 7.53125 1.085937 15.167969 1.085937 22.890625 0 129.386719-105.277343 234.664063-234.664062 234.664063zm0 0" /><path d="m261.332031 288.007812c-4.09375 0-8.191406-1.558593-11.304687-4.691406l-96-96c-6.25-6.253906-6.25-16.386718 0-22.636718s16.382812-6.25 22.632812 0l84.695313 84.695312 223.335937-223.339844c6.253906-6.25 16.386719-6.25 22.636719 0s6.25 16.382813 0 22.632813l-234.667969 234.667969c-3.136718 3.113281-7.230468 4.671874-11.328125 4.671874zm0 0" /></svg>
                원하는 시간에, 가장 빠른 전문가를 매칭합니다
            </div>
            <p>지금 바로, 가장 필요한 순간에 찾아갈 수 있는 5년 이상의 경력을 보유한 시공전문가를 만나보세요.</p>
            <div className={styles.factor}>
                <svg height="16pt" viewBox="0 -21 512.016 512" width="16pt" xmlns="http://www.w3.org/2000/svg"><path d="m234.667969 469.339844c-129.386719 0-234.667969-105.277344-234.667969-234.664063s105.28125-234.6679685 234.667969-234.6679685c44.992187 0 88.765625 12.8203125 126.589843 37.0976565 7.425782 4.78125 9.601563 14.679687 4.820313 22.125-4.796875 7.445312-14.675781 9.597656-22.121094 4.820312-32.640625-20.972656-70.441406-32.042969-109.289062-32.042969-111.746094 0-202.667969 90.921876-202.667969 202.667969 0 111.742188 90.921875 202.664063 202.667969 202.664063 111.742187 0 202.664062-90.921875 202.664062-202.664063 0-6.679687-.320312-13.292969-.9375-19.796875-.851562-8.8125 5.589844-16.621094 14.378907-17.472656 8.832031-.8125 16.617187 5.589844 17.472656 14.378906.722656 7.53125 1.085937 15.167969 1.085937 22.890625 0 129.386719-105.277343 234.664063-234.664062 234.664063zm0 0" /><path d="m261.332031 288.007812c-4.09375 0-8.191406-1.558593-11.304687-4.691406l-96-96c-6.25-6.253906-6.25-16.386718 0-22.636718s16.382812-6.25 22.632812 0l84.695313 84.695312 223.335937-223.339844c6.253906-6.25 16.386719-6.25 22.636719 0s6.25 16.382813 0 22.632813l-234.667969 234.667969c-3.136718 3.113281-7.230468 4.671874-11.328125 4.671874zm0 0" /></svg>
                견적을 빠르게 미리 받을 수 있습니다
            </div>
            <p>AS가 필요한 부분을 사진으로 전달주시면, 설치비 및 수리비를 빠르고 정확하게 파악할 수 있습니다.</p>
            <div className={styles.factor}>
                <svg height="16pt" viewBox="0 -21 512.016 512" width="16pt" xmlns="http://www.w3.org/2000/svg"><path d="m234.667969 469.339844c-129.386719 0-234.667969-105.277344-234.667969-234.664063s105.28125-234.6679685 234.667969-234.6679685c44.992187 0 88.765625 12.8203125 126.589843 37.0976565 7.425782 4.78125 9.601563 14.679687 4.820313 22.125-4.796875 7.445312-14.675781 9.597656-22.121094 4.820312-32.640625-20.972656-70.441406-32.042969-109.289062-32.042969-111.746094 0-202.667969 90.921876-202.667969 202.667969 0 111.742188 90.921875 202.664063 202.667969 202.664063 111.742187 0 202.664062-90.921875 202.664062-202.664063 0-6.679687-.320312-13.292969-.9375-19.796875-.851562-8.8125 5.589844-16.621094 14.378907-17.472656 8.832031-.8125 16.617187 5.589844 17.472656 14.378906.722656 7.53125 1.085937 15.167969 1.085937 22.890625 0 129.386719-105.277343 234.664063-234.664062 234.664063zm0 0" /><path d="m261.332031 288.007812c-4.09375 0-8.191406-1.558593-11.304687-4.691406l-96-96c-6.25-6.253906-6.25-16.386718 0-22.636718s16.382812-6.25 22.632812 0l84.695313 84.695312 223.335937-223.339844c6.253906-6.25 16.386719-6.25 22.636719 0s6.25 16.382813 0 22.632813l-234.667969 234.667969c-3.136718 3.113281-7.230468 4.671874-11.328125 4.671874zm0 0" /></svg>
                카카오페이, 무통장 입금. 원하는 방식으로 결제
            </div>
            <p>안심하세요. 이제는 시공이 완료된 후에 온라인으로 편리하게 결제를 하시면 됩니다.</p>
        </div>
    )
}

const Reviews = () => {
    return (
        <div className={styles.reviews_outer}>
            <h3>고객 리뷰</h3>
            <div className={styles.reviews_inner}>
                {
                    reviews.map(r => {
                        return (
                            <ReviewCard review={r} />
                        )
                    })
                }
            </div>
        </div>
    )
}

const ReviewCard = ({ review }) => {
    return (
        <div className={styles.review_card}>
            <h3 className={styles.review_title}>{review.title}</h3>
            <p className={styles.review_desc}>{review.desc}</p>
            <p className={styles.review_date}>{review.date}</p>
        </div>
    )
}

const ServiceCard = ({ service }) => {
    return (
        <a href={service.link} className={styles.service_card}>
            <img src={service.thumbnail} />
            <div className={styles.service_name}>{service.name}</div>
            <div className={styles.service_price}>{service.price}</div>
        </a>
    )
}

export const Layout = ({ children }) => {
    return (
        <div>
            <Header isButtonExist={true} />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export const Layout2 = ({ children }) => {
    return (
        <div>
            <Header isButtonExist={false} />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}

const Header = ({ isButtonExist = false }) => {
    return (
        <header className={styles.aquaman_header}>
            <a href={"/aquaman"} className={styles.aquaman_logo}>AQUAMAN</a>
            {
                isButtonExist ?
                    <a href={"/aquaman/request"} className={styles.aquaman_start_request}>상담신청</a>
                    : null
            }
        </header>
    )
}

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>상호: 주식회사 인텔리어</p>
            <p>대표: 김정환</p>
            <p>대표번호: 02-6959-9797</p>
            <p>FAX: 02-2659-6766</p>
            <p>전자메일: dev@hellomy.house</p>
            <p>사업자등록번호: 747-88-01668</p>
            <p>통신판매번호: 2020-서울강서-2720</p>
            <p>주소: 서울특별시 강서구 마곡서로 133, 713동 7층 705호</p>
            <p>Copyright(C) 인텔리어(hellomy.house) All Rights Reserved</p>
            <p>
                <a href="https://hellomy-house-s3.s3.ap-northeast-2.amazonaws.com/prod/zsr/usage.html">이용약관</a>
            </p>
            <p>
                <a href="https://hellomy-house-s3.s3.ap-northeast-2.amazonaws.com/prod/zsr/privacy.html">개인정보 처리방침</a>
            </p>
        </footer>
    )
}

const reviews = [
    {
        title: "김oo 고객님의 솔직 후기",
        desc: "저희 집 주방이 오래되어서 수리하기 까다로우셨을텐데, 더워도 힘든내색없이 친절하게 수리해주셔서 감사합니다^^.",
        date: "2020.08.21"
    },
    {
        title: "최oo 고객님의 솔직 후기",
        desc: "셀프로 수전을 설치하려니 노하우가 없어서인지 잘 안되더라구요. 급하게 연락드렸는데 빨리와주시고 저렴하게 설치해주셔서 감사합니다.",
        date: "2020.09.01"
    },
    {
        title: "김oo 고객님의 솔직 후기",
        desc: "그동안 화장실 배수구가 자주 막혔어요. 미루고 미루다가 우연히 아쿠아맨을 알게되었는데, 친절하게 시공을 잘해주시네요.",
        date: "2020.07.30"
    },
    {
        title: "정oo 고객님의 솔직 후기",
        desc: "오래된 아파트를 사서 입주했는데 누수가 심해서 스트레스가 컸어요. 비교한 업체중 원인을 제일 디테일하게 집어주셔서, 믿고 보수를 맡겼습니다.",
        date: "2020.09.03"
    },
    {
        title: "조oo 고객님의 솔직 후기",
        desc: "주방 배수구가 자주 막혀서요.. 수리요청드렸구 친절하시고 비용도 괜찮네요...",
        date: "2020.09.03"
    }
]


const services = [
    {
        thumbnail: "/aquaman/service1.png",
        name: "수전설치 >",
        price: "25,000원",
        link: "/aquaman/request?service=수전설치"
    },
    {
        thumbnail: "/aquaman/service2.png",
        name: "수전교체 >",
        price: "25,000원",
        link: "/aquaman/request?service=수전교체"
    },
    {
        thumbnail: "/aquaman/service3.png",
        name: "수전수리 >",
        price: "25,000원",
        link: "/aquaman/request?service=수전수리"
    },
    {
        thumbnail: "/aquaman/service4.png",
        name: "주방배관막힘 >",
        price: "25,000원",
        link: "/aquaman/request?service=주방배관막힘"
    },
    {
        thumbnail: "/aquaman/service5.png",
        name: "배수구수리 >",
        price: "60,000원",
        link: "/aquaman/request?service=배수구수리"
    },
    {
        thumbnail: "/aquaman/service6.png",
        name: "누수 >",
        price: "상담필요",
        link: "/aquaman/request?service=누수"
    },
]