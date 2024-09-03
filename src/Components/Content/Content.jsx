
import "./Content.css";

const Content = () => {
  return (
    <div className="content">
      <div className="kiri">
        <center>
          <div className="div1"></div>
        </center>

        <center>
        <div className="teks1">
          <h1>SEARCH ENGINE</h1>
          <p>
            Search engine atau mesin pencari adalah alat perangkat lunak yang
            mencari dan <br /> menampilkan informasi dari internet berdasarkan
            kata kunci yang dimasukkan pengguna. <br />
            Mesin pencari bekerja dengan mengindeks halaman web dan menyajikan
            hasil pencarian yang relevan dan terstruktur.
          </p>
        </div>
        </center>

      </div>
      <div className="kanan">
        <center>
        <div className="div2"></div>
        </center>
        <center>
        <div className="teks2">
          <h1>OPERATING SYSTEM</h1>
          <p>
            operating system adalah perangkat lunak yang mengelola perangkat
            keras komputer dan menyediakan layanan untuk program aplikasi.{" "}
            <br /> Sistem operasi mengatur berbagai fungsi dasar seperti
            manajemen file, kontrol perangkat keras, dan penyediaan antarmuka
            pengguna, sehingga memungkinkan pengguna dan aplikasi berinteraksi
            dengan komputer secara efektif.
          </p>
        </div>
        </center>
        <h2>Contoh Search Engine :</h2>
        <div className="search">
          <div className="google">
            <img src="https://img.freepik.com/free-psd/google-icon-isolated-3d-render-illustration_47987-9777.jpg?t=st=1725379502~exp=1725383102~hmac=34ca0b0ad79d1c93e1aa695a9eca6d4709e3c3fe279c0459bbc183b8bf566cbd&w=740" alt="" />
            <h3>Google</h3>
          </div>
          <div className="bing">
            <img src="data:image/jpeg;base64,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" alt="" />
            <h3>Bing</h3>
          </div>
          <div className="yahoo">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGbdwvki9grPrAhb23XzQxi2JwRc39AUnDlg&usqp=CAU" alt="" />
            <h3>Yahoo</h3>
          </div>
        </div>
        <h2>Contoh Operating System :</h2>
        <div className="os">
          <div className="windows">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEX///8Bd9sActqGsekAdNoAbtl6qefP3vVPkuEAcNrA1PIAbNkAatiyy/C4zvEAddunxe6vyfAAZ9iev+3g6vnm7/pJjuB0peYAZNfW4/fy9/2ArOe/0/L0+f2UuOtCit9imuMqgd1ZluIbfdybvOxroOVrpGfvAAACSUlEQVR4nO3c626CMABAYagKFlARnRPwMqd7/1ccbUXnZQ6Sbazd+ZIlhg3DSZt2P0g9DwAAAAAAAAAAAAAAAAAAAAAAAADQ3Hoepb2w66f4EU/hdPO2lVkspVg6lVjkq0Mw9ON4IEV/4mui1/VTfQc9HV92MqnKRN+/YHmhmY5CT8d60HwnCot8PLuejp+wr/Cpmo4iiW+no92Faswi81HKLwbNrsJqcZyVr/u4WkJklqorYdwm7+8WHssuFsf+Qv0mHNhdaMp28b1lvz9Uf2Fr4YeyTxdHOwtPW/WDDc3qwu2jrdqFwkOrp7WxsCcopJBCCimkkEIKKaSQQgoppJBCCimkkEIKKaSQQgoppJBCCo3yVwrLDgujpWgh2ah71kmbeyrLqMNCLwpaSM0987LNTUGw6jIQwF8wVkbGVEvPZurn5HBcE9fmenppejI60V8+LjoNnAxkA8dl37x96fmN7jnL5h0GRu3eidJvX+ZWvV8ayVaFFv7XRiGFFFJIIYUUUkghhRRSSCGFFFJIIYUUUkghhRRSSCGFFDa1cr4wzFwv9IIs+fqwLqsL1YFro83botGxZJYW1lTp82KSPCi1vLBmSv3kzux1pLBmSvdm9pojsdw46+vGhzFdjtQFV85ru1GV5uaTkA2PE7Ss8Kw4BEN9CF/DXca+QkPvMltp1l4nC4/UeW/l6/7e0utIYU0vSNtqQZI3Q+pIYc0M6SBx7hzha0U+rvYY4eBZ0NfcPc8bAAAAAAAAAAAAAAAAAAAAAAAAwD/2Dj+0SoeGC7eOAAAAAElFTkSuQmCC" alt="" />
            <h3>Microsoft Windows</h3>
          </div>
          <div className="macos">
            <img src="data:image/png;base64,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" alt="" />
            <h3>MacOS</h3>
          </div>
          <div className="linux">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrGadWlACx6o4EaDYOPztDmhZ2f5i9Xxyyhg&usqp=CAU" alt="" />
            <h3>Linux</h3>
          </div>
        </div>
        <div className="sejarah">
          <h2>Sejarah Search Engine</h2>
          <p>
            Sejarah mesin pencari dimulai pada awal 1990-an dengan alat awal
            seperti Archie, Veronica, dan Jughead, yang mengindeks file dan
            informasi di sistem FTP dan Gopher. Pada pertengahan 1990-an, mesin
            pencari seperti Yahoo!, yang awalnya adalah direktori web, dan
            AltaVista, yang menawarkan pencarian teks penuh, mulai populer.
            Puncaknya datang pada 1998 dengan peluncuran Google oleh Larry Page
            dan Sergey Brin, yang memperkenalkan algoritma PageRank dan mengubah
            cara pencarian dilakukan. Sejak itu, Google terus mendominasi pasar
            dengan inovasi canggih, sementara mesin pencari lain seperti Bing
            dan Yahoo! juga beradaptasi dengan teknologi baru. Pada 2010-an dan
            seterusnya, mesin pencari semakin berfokus pada pengalaman pengguna
            dan integrasi kecerdasan buatan, menyesuaikan hasil pencarian secara
            personal dan beradaptasi dengan perangkat pintar.
          </p>
        </div>
        <div className="sejarah">
          <h2>Sejarah Operating system</h2>
          <p>
          Sejarah sistem operasi dimulai pada tahun 1950-an dengan sistem batch awal seperti GM-NAA I/O dan IBMs OS/360, yang dirancang untuk mengelola eksekusi program secara berurutan dan mengoptimalkan penggunaan perangkat keras. Pada 1960-an dan 1970-an, muncul sistem operasi multiprogramming seperti Unix yang dikembangkan di AT&T Bell Labs, memberikan dukungan untuk multitasking dan jaringan. Tahun 1980-an melihat kemunculan sistem operasi pribadi seperti MS-DOS dari Microsoft dan Macintosh OS dari Apple, yang mempopulerkan antarmuka pengguna grafis (GUI) dan mempermudah akses bagi pengguna non-teknis. Pada 1990-an dan 2000-an, Windows dan Linux muncul sebagai pemain dominan dengan Windows mendominasi pasar desktop dan Linux dikenal dengan sifatnya yang open-source dan skalabilitasnya untuk server. Kini, sistem operasi modern seperti Windows 10/11, macOS, dan distribusi Linux terbaru terus berkembang untuk memenuhi kebutuhan perangkat pintar, keamanan, dan cloud computing, serta beradaptasi dengan tren teknologi terbaru.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content;
