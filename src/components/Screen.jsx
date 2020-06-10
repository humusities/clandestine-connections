/* @jsx h */
import { h, Fragment } from "preact";
import Sequence from "./Sequence.jsx";
import css from "../utils/css.js";
import TLD from "./Tld.jsx";

export default ({
  pause,
  page,
  onChange = () => null,
  onPages = () => null,
  screen,
}) => {
  return (
    <Sequence
      pause={pause}
      initial={page}
      d={Array(13).fill(20000)}
      onCount={onPages}
      onChange={onChange}
      screen={screen}
    >
      <article>
        <div className="grid">
          <span>Name</span>
          <span>humusities</span>
          <blockquote>
            Rusten Hogness suggested compost instead of posthuman(ism), as well
            as humusities instead of humanities, and I jumped into that wormy
            pile.
            <br />
            <br />
            <small>
              Tentacular Thinking: Anthropocene, Capitalocene, Chthulucene 1,
              Donna Haraway
            </small>
          </blockquote>
        </div>
        <div className="grid">
          <span>Format</span>
          <span>4 Screens</span>
          <span>Note</span>
          <span>
            Each screen is used to replicate and enhance the information or
            serve alternates stories to the viewer.
          </span>
          <span>Fabrication</span>
          <span>Modern Web</span>
          <span>Note</span>
          <span>
            The Layout is responsive and adapt itself to the browser, the mobile
            and big screens, it's final form. The web is used as it is both an
            edition tool, using CSS, but also an easy way to propagate the
            project itself while being truthful to its content. Futhermore, all
            source code is available using a Free-Libre / Open Source Software
            (FLOSS) License, permitting any kind of modification, share and use.
          </span>
        </div>
        <div className="grid">
          <span>Typography</span>
          <span></span>
          <span>Autopia</span>
          <img src="assets/images/autopia-1.png" />
          <blockquote>
            The particularity of this fonts is in the process of developing its
            shape. The skeleton was generated through Autotrace Program (a
            program that converts bitmap to vectorgraphics). Calligraphic forms
            were drawn with Python Fontforge’s code. <br />
            <br />
            <small>Antoine Gelgon, Luuse</small>
          </blockquote>
        </div>
        <div className="grid">
          <span>Typography</span>
          <span></span>
          <span>TGL 0-16 and 0-17</span>
          <img src="assets/images/TGL_0-16.gif" />
          <blockquote>
            DIN 1451 is a sans-serif typeface that is widely used for traffic,
            administrative and technical applications. TGL 0-16 and 0-17, the
            names under which DIN were known in the German Democratic Republic.
            <br />
            <br />
            <small>Peter Wiegel</small>
          </blockquote>
        </div>
      </article>
      <article>
        <img src="assets/images/peuple7.jpg" />
        <center>Decentralized</center>
        <center className="grid">
          <span>What ?</span>
          <span>
            An application to connect communities using a decentralized
            protocol.
          </span>
        </center>
        <blockquote>
          The Critical Atlas of Internet Spatial, Analysis as a tool for
          socio-political purposes, Louise Drulhe
        </blockquote>
      </article>
      <article>
        <div className="grid">
          <span>Name</span>
          <span>humusities</span>
          <span>Why</span>
          <span>
            By using a virtual network formed by the participant nodes, we no
            longer are dependent of services like Google or server
            infrastructure like OVH.
          </span>
          <blockquote>
            Search engines are at the heart of the Internet edifice. They
            guarantee the "visibility" (access) of Internet space by controlling
            the hyperlinks.
            <br />
            <br /> Boris Beaude, Internet Changer L'espace Changer la Société.
          </blockquote>
        </div>
      </article>

      <article>
        <div className="grid">
          <span>1</span>
          <div>An individual open the application humusities</div>
          <span>2</span>
          <div>join a group named Clandestine</div>
          <span>3</span>
          <div>and share from its computer a folder</div>
        </div>
        <div className="grid">
          <Sequence d={[2000, 9000, 11000]}>
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </Sequence>
          <div>Peer 1</div>
          <video
            src="assets/video/humusities.mp4"
            className="pink"
            autoplay
            loop
          />
        </div>
        <div className="grid">
          <span>1</span>
          <div>
            An <i>other</i> individual open the application humusities
          </div>
          <span>2</span>
          <div>join a group named Clandestine</div>
          <span>3</span>
          <div>discover other individuals in the group Clandestine</div>
          <span>4</span>
          <div> browse the folder a member is sharing</div>
        </div>
        <div className="grid">
          <Sequence d={[2400, 3000, 5000, 8000]}>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
          </Sequence>
          <div>Peer 2</div>
          <video
            src="assets/video/humusities2.mp4"
            className="pink"
            autoplay
            loop
          />
        </div>
      </article>
      <article>
        <div className="grid">
          <span>architecture</span>
          <span>humusities</span>
          <blockquote>
            To find other members of a group, humusities use a{" "}
            <i>distributed hash table (DHT)</i>, a distributed system that
            provides a lookup service similar to Domain Names servers, but
            characterised by its autonomy and decentralization: the nodes
            collectively form the system without any central coordination.
          </blockquote>
        </div>
        <video className="mesh" src="assets/video/mesh.mp4" loop autoplay />
        <div className="grid">
          <span>Mesh</span>
          <span>
            Generated mesh using Blender CAD recording and CSS brightness
            filter.
          </span>
          <video className="mesh" src="assets/video/mesh.mp4" loop autoplay />
        </div>
        <center>Distributed Hash Table (DHT)</center>
      </article>
      <article>
        <video className="mesh" src="assets/video/mesh.mp4" loop autoplay />
      </article>
      <article>
        <video className="mesh" src="assets/video/mesh.mp4" loop autoplay />
        <div className="grid">
          <span>Size</span>
          <span>300 x 65 px</span>
          <span> </span>
          <span>
            Discrete, the application overlay the desktop and show minimal
            information with powerful semantics.
          </span>
          <span>Platforms</span>
          <span>macOS (soon: Windows, Linux)</span>
          <span>Download</span>
          <span>
            https://github.com/humusities/parasite/releases/download/0.0.6/Humusities-darwin-x64-0.0.6.zip
          </span>
          <span>Source Code</span>
          <span>https://github.com/humusities/parasite/</span>
          <span style="grid-column: span 2;">Colors</span>
          <span style="background: #363636"></span>
          <span style="background: #000000"></span>
          <span style="background: #ffffff"></span>
          <span style="background: #f9f952"></span>
        </div>
        <img style="width: 350px; margin: auto;" src="assets/images/hum.png" />
      </article>
      <article>
        <center>
          The following will attempt to depict <br />
          the state of the Internet authority which humusities try to{" "}
          <mark>resist</mark>.
        </center>
        <center>
          The following will attempt to depict <br />
          the state of the Internet authority which humusities try to{" "}
          <mark>reinvent</mark>.
        </center>
        <center>
          The following will attempt to depict <br />
          the state of the Internet authority which humusities try to{" "}
          <mark>reject</mark>.
        </center>
        <center>
          The following will attempt to depict <br />
          the state of the Internet authority which humusities try to{" "}
          <mark>reset</mark>.
        </center>
      </article>
      <article>
        <center className="grid">
          <span>Clandestine</span>
          <span>Connection</span>
        </center>
        <img
          style="background: black"
          src="assets/images/vlcsnap-2013-02-19-01h37m34s194.png"
        />
        <img
          style="background: #ccb394; object-fit: cover; object-position: 0 0;"
          src="assets/images/tumblr_n1cqp0s53y1qbbj19o1_1280.jpg"
        />
        <center className="grid">
          <span>Resistance</span>
          <span>in the Digital Age</span>
        </center>
      </article>
      <article className="cover">
        <div className="grid">
          <img src="assets/images/en-gravite4.jpg" />
          <div>opendatacity.de</div>
          <div>
            Path taken by information (network packet), depending on the
            services involved Data recovered on opendatacity.de
          </div>
        </div>
        <div className="grid">
          <img src="assets/images/relief33.svg" />
          <div>Topographical map</div>
          <div>
            Map of the top websites (and all their derived activities),
            according to Alexa, Louise Drulhe
          </div>
        </div>
        <img src="assets/images/gravite1.jpg" />
        <div className="grid">
          <TLD />
          <div>Domain Name Authorities</div>
          <div>
            Map of the Domain Name managers (.com, .nl, ...) according US
            located IANA who coordinates the sanity of the Internet.
          </div>
        </div>
      </article>
      <article>
        <center>
          The following video will show <br />
          <b>Peter Sunde Kolmisoppi</b>, born 13 September 1978, alias
          <i> brokep</i>.
          <br />
          The Pirate Bay, co-founder of the world’s largest peer-to-peer
          file-sharing site.
        </center>
        <div>
          <blockquote>
            In December, Gottfrid (i.e. one of the co-founder) was arrested in
            his home in Cambodia, extradited to Sweden and started to serve his
            prison sentence.
            <br />
            <br />
            <small>TorrentFreak, February 2, 2013</small>
          </blockquote>
        </div>
        <div className="grid">
          <span>
            The film is built around the court trial, from its beginning in 2009
            through the appeal in 2010 and the Supreme Court rejection of
            further appeal in February 2012. What unfolds is a clash of
            cultures, between hackers and industry, between a technological
            intelligence that only needs an IRC channel as an office and
            explores unlimited opportunities and a business mind that looks for
            anything that increases — or threatens chances for profits.
          </span>
          <blockquote>
            One reason for making this film was that I couldn’t relate to the
            media industry’s claim that sharing files was a threat to
            creativity. To me, the unrestricted access to culture was the very
            spark in the online revolution, where every imaginable artistic
            expression exploded with creativity.
            <br />
            <br />
            <small>
              Simon Klose, Director The Pirate Bay – Away From Keyboard, 2013
            </small>
          </blockquote>
        </div>
      </article>
      <article>
        <video src="assets/video/afk.mp4" autoplay loop />
      </article>
      <article>
        <center>
          Request for Comments (RFC) is a <i>memorandum</i> document from the
          technology community describing methods, behaviors, research, or
          innovations applicable to Internet eco-system.
          <br />
          <br />
          The IETF (Internet Engineering Task Force) under the Internet Society
          adopts some of the proposals published as RFCs as Internet Standards.
        </center>
        <iframe src="assets/pages/RFC 793 - Transmission Control Protocol.html"></iframe>
        <iframe src="assets/pages/RFC 2616 - Hypertext Transfer Protocol -- HTTP_1.1.html"></iframe>
        <iframe src="assets/pages/RFC 5694 - Peer-to-Peer (P2P) Architecture Definition, Taxonomies, Examples, and Applicability.html" />
      </article>
    </Sequence>
  );
};

css`
  article {
    font-family: "tgl 0-17 alt", arial, sans-serif;
    position: relative;
    display: flex;
    /* filter: grayscale(1); */
  }

  .grid {
    display: grid;
    grid-template-columns: minmax(4rem, auto) 1fr;
    flex: 1;
  }
  .grid > *:not(img):not(video):not(svg) {
    padding: 1rem;
  }

  article:hover {
    filter: grayscale(0);
  }

  .pink {
    background: var(--primary);
    height: calc(100% - 2rem);
    padding: 1rem;
  }

  .grid
    > *:nth-child(2n + 1):not(blockquote):not(img):not(video):not(p):not(svg),
  article:nth-child(n + 1) {
    border-right: var(--border);
  }
  .grid > *:nth-child(1),
  .grid > *:nth-child(2),
  article:nth-child(1),
  article:nth-child(2),
  .grid > span {
    border-bottom: var(--border);
  }

  .dot {
    font-size: 10rem;
  }

  img,
  video,
  svg,
  blockquote {
    grid-column: span 2;
  }

  blockquote {
    background: var(--primary);
    padding: 1.7rem;
    margin: 0;
  }

  video,
  center {
    pointer-events: none;
    align-self: center;
    margin: auto;
    font-size: 1.6rem;
    letter-spacing: 0.05rem;
  }

  .mesh {
    filter: brightness(6);
  }

  img,
  video,
  iframe,
  svg {
    height: 100%;
    width: 100%;
    object-fit: contain;
    border: none;
  }
  video + * {
    margin-left: 1rem;
  }

  article.cover img,
  article.cover svg {
    object-fit: cover;
  }
`;
