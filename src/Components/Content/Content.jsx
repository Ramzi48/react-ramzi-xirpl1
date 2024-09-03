
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
            <img src="src/assets/img/google.jpg" alt="" />
            <h3>Google</h3>
          </div>
          <div className="bing">
            <img src="src/assets/img/Bing.jpg" alt="" />
            <h3>Bing</h3>
          </div>
          <div className="yahoo">
            <img src="src/assets/img/Yahoo.jpg" alt="" />
            <h3>Yahoo</h3>
          </div>
        </div>
        <h2>Contoh Operating System :</h2>
        <div className="os">
          <div className="windows">
            <img src="src/assets/img/Windows.jpg" alt="" />
            <h3>Microsoft Windows</h3>
          </div>
          <div className="macos">
            <img src="src/assets/img/MacOS.jpg" alt="" />
            <h3>MacOS</h3>
          </div>
          <div className="linux">
            <img src="src/assets/img/Linux.jpg" alt="" />
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
