import React from "react"
import { Link, withPrefix } from "gatsby"
import styles from './index.module.css'
import fontStyles from './font.module.css'
import Layout, { DefaultMaxWidthContainer } from "../components/layout"
import Image from "../components/mainImage"
import SEO from "../components/seo"
import YellowLogo from '../components/yelloLogo'
const IndexPage = () => (
    <Layout>
        <SEO title="About" />
        <div className={styles.main_container}>
            <div className={styles.image_wrapper}>
                {/* <img src={`/images/`} */}
                <Image />
            </div>
            <div className={styles.text_container}>
                <h1>모두의 일상이<br />빈 틈 없이 아름답도록</h1>
                <p>모두의 일상이 빈 틈 없이 아름답도록<br />안녕내집이 인테리어 문화를 선도합니다</p>
            </div>
        </div>
        <section className={styles.section}>
            <div className={styles.logo_wrapper}>
                <YellowLogo />
            </div>
            <div className={styles.section_text_container}>
                <h2>소비자와 공급자가 함께하는<br />인테리어 플랫폼</h2>
                <p>인테리어 소비자와 공급자의 상생은 우리에게 가장 중요한 목표입니다.<br />
                    큰 공사부터 작은 공사까지 이르는 모든 거래에서 소비자와 인테리어 업체뿐 아니라<br />
                    기술자 한 분 한 분까지, 모든 이해관계자들의 지속가능성을 고민한다는 의미죠.<br />
                    우리는 이 목표를 달성하기 위해 솔직한 인테리어 플랫폼 ‘안녕내집’을 제공하고<br />
공간이 새롭게 태어나는 모든 현장에 올바른 인테리어 문화를 전해 나가고자 합니다.</p>
            </div>
            <div className={styles.platform_container}>
                <div className={styles.platform_row}>
                    <div className={styles.platform_consumer}>
                        소비자
                        </div>
                    <div className={styles.platform_supplier}>
                        공급자
                        </div>
                </div>
                <div className={styles.platform}>
                    안녕내집
                    </div>
            </div>
        </section>
        <section className={styles.section} style={{ backgroundColor: `rgba(0,0,0,0.02)` }}>
            <div className={styles.caption_wrapper}>
                <h4 style={{ color: "#FF4E00" }}>소비자를 위하여</h4>
            </div>
            <div className={styles.section_text_container}>
                <h2>처음부터 소비자가 알았어야 할<br />인테리어 공사 정보들</h2>
                <p>그동안 인테리어 소비자는 알 권리를 충분히 보장받지 못했습니다.<br />
                안녕내집은 협력업체의 이력과 자재정보를 포함한 구체적인 공사 정보뿐 아니라<br />
                투명하게 내역이 공개된 견적서, A/S 가 명시된 안심 계약서까지 제공하여<br />
소비자가 알맞은 가격과 안심할 수 있는 정보로 인테리어 거래를 진행할 수 있도록 돕습니다.</p>
            </div>
            <div className={styles.magazine_container}>
                <MagazineCard
                    title="자재 금액, 업체 이윤을 공개한 '솔직패키지'"
                    subtitle="합리적인 인테리어를 위한 솔직패키지를 알아보세요"
                    thumbnail={withPrefix('/consumer_1.png')} 
                    link={'https://hellomy.house/magazine/eae9c9e6-c722-44a8-a67b-899103732780'}
                />
                <MagazineCard
                    title="상세 가격을 공개한 견적서, AS가 명시된 계약서"
                    subtitle="투명한 인테리어의 필수요소입니다."
                    thumbnail={withPrefix('/consumer_2.png')}
                    link={'https://hellomy.house/magazine/eae9c9e6-c722-44a8-a67b-899103732780'}
                />
                <MagazineCard
                    title="하자이행 보험, 계약이행 보험으로 더욱 더 안전하게"
                    subtitle="보험을 통해 더욱 더 안전한 인테리어 공사를 진행하세요"
                    thumbnail={withPrefix('/consumer_3.png')}
                    link={'https://hellomy.house/magazine/eae9c9e6-c722-44a8-a67b-899103732780'}
                />
            </div>
        </section>
        <section className={styles.section}>
            <div className={styles.caption_wrapper}>
                <h4 style={{ color: "#FF4E00" }}>협력업체를 위하여</h4>
            </div>
            <div className={styles.section_text_container}>
                <h2>업체 대표님 혼자서 챙기긴<br />어려웠던 것들</h2>
                <p>공사 현장에만 집중하실 수 있도록 다양한 서비스를 제공하고 있습니다.<br />
                신규 고객 유치, 포트폴리오와 고객 상담용 3D 이미지의 무료 제작부터<br />
                공사 현장을 전문적인 사진 촬영과 시공 보고서로 기록해 드리는 서비스까지.<br />
안녕내집의 협력업체가 되시고 안정적이고 지속적인 사업 성장을 경험해 보세요.</p>
            </div>
            <div className={styles.magazine_container}>
                <MagazineCard
                    title="3D 시뮬레이션으로 탄생한 예상도로 고객과 소통하세요"
                    subtitle="고객만족도는 더욱 더 상승합니다"
                    thumbnail={withPrefix('/supplier_1.png')}
                    link={'https://hellomy.house/magazine/0ec9dba7-b9ea-4314-ac2e-7dbb2010984a'}
                />
                <MagazineCard
                    title="전문 사진가의 포트폴리오 촬영으로 현장을 생생하게"
                    subtitle="전문 공사 현장의 느낌을 그대로 고객에게 전달해보세요"
                    thumbnail={withPrefix('/supplier_2.png')}
                    link={'https://hellomy.house/magazine/0ec9dba7-b9ea-4314-ac2e-7dbb2010984a'}
                />
                <MagazineCard
                    title="시공관리 프로그램으로 고객관리를 더욱 편하게"
                    subtitle="시공에 더 집중하세요. 고객관리 수고를 덜어보세요"
                    thumbnail={withPrefix('/supplier_3.png')}
                    link={'https://hellomy.house/magazine/0ec9dba7-b9ea-4314-ac2e-7dbb2010984a'}
                />
            </div>
        </section>
        <section className={`${styles.section} ${styles.with_background}`} style={{
            backgroundColor: "#fee638",
            backgroundImage: `url(${withPrefix('/recruit_background.png')})`,
        }}>
            <div className={styles.section_text_container}>
                <h2 style={{ color: "#1064db" }}>안녕내집에서는 솔직한 인재들이<br />똑똑한 방식으로 함께합니다</h2>
                <Link className={styles.link_to_recruit} to="https://hellomy.house/magazine/096a9b5e-02f4-4868-b611-1a9db8761f05" style={{color: "#333"}}>
                    채용 바로가기
                    <svg className={styles.chevron_next} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        viewBox="0 0 185.343 185.343" space="preserve">
                        <path d="M51.707,185.343c-2.741,0-5.493-1.044-7.593-3.149c-4.194-4.194-4.194-10.981,0-15.175
			l74.352-74.347L44.114,18.32c-4.194-4.194-4.194-10.987,0-15.175c4.194-4.194,10.987-4.194,15.18,0l81.934,81.934
			c4.194,4.194,4.194,10.987,0,15.175l-81.934,81.939C57.201,184.293,54.454,185.343,51.707,185.343z"/>
                    </svg>
                </Link>
            </div>
        </section>
    </Layout>
)

const MagazineCard = ({thumbnail, title, subtitle, link}) => {
    return (
        <a href={link} className={styles.magazine_card}>
            <img src={thumbnail}/>
            <div className={styles.magazine_desc}>
                <h3>{title}</h3>
                <h5>{subtitle}</h5>
            </div>
        </a>
    )
}

export default IndexPage
