import React, { Component } from 'react'
import { Card, Button, Accordion } from 'react-bootstrap'
import { MenuChevron } from '../../assets';
import './Faq.scss'

export default class Faq extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subMenu: 'Faq',
            idToggleActive: null,
            toggleActive: false,
            dataFaq: [
                { id: 1, title: '1. Apa itu bencana dan ancaman bencana?', 
                content: 
                    <div className = "description">
                    <strong>Bencana</strong> <br/> Merupakan peristiwa atau rangkaian peristiwa yang mengancam dan mengganggu kehidupan dan penghidupan masyarakat. Penyebabnya  adalah faktor alam dan/atau faktor non-alam maupun faktor manusia yang menyebabkan kerugian pada manusia, barang atau lingkungan dan aset kehidupan pada umumnya yang melampaui kemampuan masyarakat yang terkena dampak untuk menghadapinya dengan sumberdaya yang dimilikinya sendiri. Bencana bisa terjadi secara tiba-tiba maupun perlahan.
                    <br/><br/> <strong>Ancaman</strong> <br/> Merupakan kejadian-kejadian, gejala alam atau kegiatan manusia yang berpotensi untuk menimbulkan kematian, luka-luka, kerusakan harta benda, gangguan sosial ekonomi atau kerusakan lingkungan. Sedangkan berdasarkan UU Penanggulangan Bencana No. 24 Tahun 2007, ancaman bencana adalah suatu kejadian atau peristiwa yang bisa menimbulkan bencana.
                    <br/> <br/>Terlihat bedanya bukan? Ancaman bisa menimbulkan bencana, awal mula dari semuanya. Bencana juga bisa disebut sebagai gabungan dari ancaman bencana, kerentanan, dan kemampuan yang dipicu oleh suatu kejadian itu sendiri.
                    </div> 
                },
                { id: 2, title: '2. Apa itu JAKOMKRIS PBI?', 
                content: 
                    <div className = "description">
                        JAKOMKRIS PBI merupakan akronim dari Jejaring Komunitas Kristen untuk Penanggulangan Bencana di Indonesia. JAKOMKRIS PBI adalah suatu perkumpulan yang meliputi berbagai Lembaga pelayanan kristen, Yayasan Kristen, dan Gereja untuk bisa memberikan pelayanan Pengurangan Risiko Bencana berbasis Gereja. (profil lengkap dapat dilihat pada brosur Jakomkris PBI)…Click link ini
                    </div>
                },
                { id: 3, title: '3. Mengapa ada konsep: Gereja Tangguh Bencana?', 
                content: 
                    <div className = "description">
                        Gereja-gereja di Indonesia dengan warga jemaatnya merupakan bagian dari masyarakat Indonesia. Agar dapat hidup aman, tidak terancam jiwanya dan tidak hilang atau hancur sumber penghidupannya harus mampu mengenali, melakukan adaptasi maupun selalu bersiap diri untuk menghadapi berbagai ancaman bencana yang berada di wilayahnya masing-masing. Hal inilah yang mendorong Jejaring Komunitas Kristen untuk Penanggulangan Bencana di Indonesia (JAKOMKRIS PBI) untuk mengambil bagian dalam memperlengkapi warga gereja untuk meningkatkan kemampuannya (kapasitasnya) dalam menghadapi ancaman bencana.
                        <br/><br/>Sebagai fasilitas umum dengan bangunan (struktural) dan sumber daya manusia, kebijakan, dan pengelolaan dana (non-struktural). Gereja menjadi salah satu unsur masyarakat juga dapat mengambil bagian dalam Pengurangan Risiko Bencana baik tingkat jemaat hingga wilayah lain. Gereja perlu senantiasa meningkatkan kapasitasnya untuk menjadi siap siaga dalam menghadapi ancaman bencana Indonesia.
                        <br/><br/>Gereja-gereja dapat menjadi Tangguh Bencana jika telah mengenali dirinya dengan memetakan ancaman, risiko, kerentanan, dan kapasitasnya. Peningkatan kapasitas gereja melalui pelatihan-pelatihan yang diselenggarakan akan menebar “biji sesawi” yang akan tumbuh dan berbuah dengan bertambahnya warga gereja yang memahami penanggulangan bencana dengan baik dan membangun warga gereja dan komunitas untuk senantiasa “waspada dan berjaga-jaga” agar tangguh menghadapi ancaman bencana di tempat hidup kita, bumi Indonesia tercinta.

                    </div>
                },
                { id: 4, title: '4. Siapa saja yang menjadi sasaran/terget survei Gereja Tanggug Bencana?', 
                content: 
                    <div className = "description">
                        Sasaran Survei Gereja Tangguh Bencana (Survei GTB) meliputi Gereja-gereja Kristen dari berbagai denominasi di Indonesia, juga gereja yang memiliki kerinduan untuk terlibat dalam isu-isu Pengurangan Risiko Bencana di Indonesia. Untuk saat ini, Gereja-gereja Kristen di Palu, Sulawesi Tengah dan Daerah Istimewa Yogyakarta sudah menjalankan survei bermanfaat ini. 
                    </div>
                },
                { id: 5, title: '5. Mengapa Peta Gereja Tangguh Bencana itu penting?', 
                content: 
                    <div className = "description">
                        Secara internal, Peta Gereja Tangguh Bencana (Peta GTB) menunjukkan ancaman, risiko, kerentanan, dan kapasitas Gereja terhadap bencana.
                        Secara eksternal dan sebagai jejaring, Peta GTB dapat menunjukkan peran Gereja Kristen sebagai bagian dari pemerintah dalam melakukan kerja-kerja bersama Pengurangan Risiko Bencana di Indonesia.
                    </div>
                },
                { id: 6, title: '6.	Apakah perbedaan Peta ini dengan InaRisk?', 
                content: 
                    <div className = "description">
                        Peta GTB dibuat sesuai dengan ancaman bencana lokal pada wilayah gereja yang melakukan penilaian diri melalui pengisian Survei Gereja Tangguh Bencana. Perbedaannya dengan InaRisk terlihat dari penggambaran ancaman bencana yang diketahui oleh gereja dan masyarakat sekitar gereja berdasarkan peta ancaman bencana pada InaRisk yang menggambarkan kondisi wilayah secara umum telah ada sebelumnya.
                    </div>
                },
                { id: 7, title: '7.	Siapa saja yang berperan membuat Peta Gereja Tangguh Bencana ini?', 
                content: 
                    <div className = "description">
                        JAKOMKRIS PBI membuat, melakukan, dan menyimpulkan hasil berdasarkan data Survei GTB sesuai mandat BNPB untuk mewujudkan Rumah Ibadah Tangguh Bencana. 
                        <br/><br/>JAKOMKRIS PBI juga bekerjasama dengan Fakultas Teknik Informasi Prodi Teknik Informatika (TI) Universitas Kristen Duta Wacana Yogyakarta. Kerjasama untuk membuat peta dilakukan bersama para mahasiswa Kelompok Kerja Nyata (KKN) yakni Jesslyn Septhia, Stevani Dwi Utomo, Desendo Imanuel, Nafarel Triyoga Maskuncoro, Hezkiel Rivaldo Siregar, dan Ebentera Santosa, beserta Dosen Pembimbing mereka yaitu Matahari Bhakti Nendya.
                        <br/><br/>Selain itu, Sinode Gereja Kristen Jawa turut andil dalam menyediakan server untuk penyimpanan, akses survei, dan Peta GTB.
                    </div>
                },
                { id: 8, title: '8. Apakah tindak lanjut dari Survei Gereja Tangguh Bencana?', 
                content: 
                    <div className = "description">
                        Tindak lanjut survei ini adalah:<br/><br/>
                        A.&nbsp;Seminar Hasil Pemetaan GTB yang menunjukkan ancaman, risiko, kerentanan dan kapasitas Gereja.<br/>
                        Sebelumnya dilakukan Analisis Peta GTB yang menghasilkan empat kuadran kapasitas yang perlu dipertahankan bahkan ditingkatkan. Empat kuadran tersebut adalah:<br/>
                        &emsp;Kuadran 1: Pengetahuan tentang Risiko<br/>
                        &emsp;Kuadran 2: Pemantauan dan Layanan Peringatan<br/>
                        &emsp;Kuadran 3: Penyebarluasan dan Komunikasi<br/>
                        &emsp;Kuadran 4: Kemampuan Merespons<br/>
                        B.&nbsp;Konsultasi dan pendampingan peningkatan kapasitas bagi gereja gereja yang membutuhkan.
                    </div>
                },
                { id: 9, title: '9. Bagaimanakah Sinode, Klasis, Gereja, dan Lembaga Kristen lain dapat berpartisipasi?', 
                content: 
                    <div className = "description">
                        Pelatihan-pelatihan Pengurangan Risiko Bencana berbasis Gereja yang diadakan JAKOMKRIS PBI melibatkan cukup banyak lembaga, organisasi, yayasan kemanusiaan yang tentunya berkompeten. Melalui kegiatan-kegiatan kami, tentu saja Sinode, Klasis, Gereja, dan Lembaga Kristen lain dapat ikut berparitipasi. Hubungi narahubung kami melalui email, media sosial, dan konak Sekretariat Nasional, ikuti pelatihannya, dan sebutkan kebutuhan Anda. Kerja sama dan pelayanan kasih sangat kami sambut dengan baik.
                    </div>
                },
                { id: 10, title: '10. Kemana saya bisa menghubungi jika gereja membutuhkan pelatihan terkait kebencanaan?', 
                content: 
                    <div className = "description">
                        Anda bisa menghubungi kami di:<br/>
                        Email: jakomkris@gmail.com<br/>
                        Facebook/Meta: jakomkrispbi<br/>
                        Instagram: @jakomkrispbi<br/>
                        Telp/WA chat: Denny Subrata (0856-2862-525)
                    </div>
                }],
            dataFaqSelected: null
        }
    }

    handleClickItem(value) {
        this.setState({ badanUsahaSelected: value })
    }

    handleToggle(event) {
        let { idToggleActive, toggleActive } = this.state
        let idToggle = event.target.id

        console.log(idToggle)

        if (!toggleActive) {
            this.setState({
                idToggleActive: idToggle,
                toggleActive: true
            })
        }
        else {
            if (toggleActive && idToggleActive == idToggle) {
                this.setState({
                    toggleActive: false,
                    idToggleActive: null
                })
            }
            else {
                this.setState({
                    idToggleActive: idToggle
                });
            }
        }
    }


    render() {
        let { idToggleActive, toggleActive } = this.state
        let { dataFaq, dataFaqSelected } = this.state
        let { isShow } = this.props
        return (
            <div className="faq">
                <div className="Faq-page">
                    {dataFaq.map((item, i) => {
                        return (
                            <Accordion className="accordion">
                                <Card className={"card" + (i == 0 ? ' top' : ' bottom' )}>
                                    <Card.Header className={"header-side" + (idToggleActive == item.id ? ' active' : '')}>
                                        <Accordion.Toggle className="title-toggle" as="div" variant="link" eventKey={item.id} id={item.id} onClick={(event) => this.handleToggle(event)}>
                                            {item.title}       
                                        </Accordion.Toggle>
                                        <img src={MenuChevron} className="chevron" />
                                    </Card.Header>
                                    <Accordion.Collapse eventKey={item.id}>
                                        <Card.Body >{item.content}</Card.Body>
                                    </Accordion.Collapse>
                                </Card> 
                            </Accordion>
                        )
                    })}
                </div>



            </div>
        )
    }
}