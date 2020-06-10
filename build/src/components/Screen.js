import {h, Fragment} from "preact";
import Sequence2 from "./../../../src/components/Sequence.jsx";
import css2 from "./../../../src/utils/css.js";
import TLD from "./../../../src/components/Tld.jsx";
export default ({pause, page, onChange = () => null, onPages = () => null, screen}) => {
  return h(Sequence2, {
    pause,
    initial: page,
    d: Array(13).fill(20000),
    onCount: onPages,
    onChange,
    screen
  }, h("article", null, h("div", {
    className: "grid"
  }, h("span", null, "Name"), h("span", null, "humusities"), h("blockquote", null, "Rusten Hogness suggested compost instead of posthuman(ism), as well as humusities instead of humanities, and I jumped into that wormy pile.", h("br", null), h("br", null), h("small", null, "Tentacular Thinking: Anthropocene, Capitalocene, Chthulucene 1, Donna Haraway"))), h("div", {
    className: "grid"
  }, h("span", null, "Format"), h("span", null, "4 Screens"), h("span", null, "Note"), h("span", null, "Each screen is used to replicate and enhance the information or serve alternates stories to the viewer."), h("span", null, "Fabrication"), h("span", null, "Modern Web"), h("span", null, "Note"), h("span", null, "The Layout is responsive and adapt itself to the browser, the mobile and big screens, it's final form. The web is used as it is both an edition tool, using CSS, but also an easy way to propagate the project itself while being truthful to its content. Futhermore, all source code is available using a Free-Libre / Open Source Software (FLOSS) License, permitting any kind of modification, share and use.")), h("div", {
    className: "grid"
  }, h("span", null, "Typography"), h("span", null), h("span", null, "Autopia"), h("img", {
    src: "https://gitlab.com/Luuse/foundry/Autopia/-/raw/master/doc/autopia-1.png"
  }), h("blockquote", null, "The particularity of this fonts is in the process of developing its shape. The skeleton was generated through Autotrace Program (a program that converts bitmap to vectorgraphics). Calligraphic forms were drawn with Python Fontforge’s code. ", h("br", null), h("br", null), h("small", null, "Antoine Gelgon, Luuse"))), h("div", {
    className: "grid"
  }, h("span", null, "Typography"), h("span", null), h("span", null, "TGL 0-16 and 0-17"), h("img", {
    src: "http://www.peter-wiegel.de/inhaltgrafik/TGL_0-16.gif"
  }), h("blockquote", null, "DIN 1451 is a sans-serif typeface that is widely used for traffic, administrative and technical applications. TGL 0-16 and 0-17, the names under which DIN were known in the German Democratic Republic.", h("br", null), h("br", null), h("small", null, "Peter Wiegel")))), h("article", null, h("img", {
    src: "https://louisedrulhe.fr/internet-atlas/img-web/peuple7.jpg"
  }), h("center", null, "Decentralized"), h("center", {
    className: "grid"
  }, h("span", null, "What ?"), h("span", null, "An application to connect communities using a decentralized protocol.")), h("blockquote", null, "The Critical Atlas of Internet Spatial, Analysis as a tool for socio-political purposes, Louise Drulhe")), h("article", null, h("div", {
    className: "grid"
  }, h("span", null, "Name"), h("span", null, "humusities"), h("span", null, "Why"), h("span", null, "By using a virtual network formed by the participant nodes, we no longer are dependent of services like Google or server infrastructure like OVH."), h("blockquote", null, 'Search engines are at the heart of the Internet edifice. They guarantee the "visibility" (access) of Internet space by controlling the hyperlinks.', h("br", null), h("br", null), " Boris Beaude, Internet Changer L'espace Changer la Société."))), h("article", null, h("div", {
    className: "grid"
  }, h("span", null, "1"), h("div", null, "An individual open the application humusities"), h("span", null, "2"), h("div", null, "join a group named Clandestine"), h("span", null, "3"), h("div", null, "and share from its computer a folder")), h("div", {
    className: "grid"
  }, h(Sequence2, {
    d: [2000, 9000, 11000]
  }, h("div", null, "1"), h("div", null, "2"), h("div", null, "3")), h("div", null, "Peer 1"), h("video", {
    src: "assets/video/humusities.mp4",
    className: "pink",
    autoplay: true,
    loop: true
  })), h("div", {
    className: "grid"
  }, h("span", null, "1"), h("div", null, "An ", h("i", null, "other"), " individual open the application humusities"), h("span", null, "2"), h("div", null, "join a group named Clandestine"), h("span", null, "3"), h("div", null, "discover other individuals in the group Clandestine"), h("span", null, "4"), h("div", null, " browse the folder a member is sharing")), h("div", {
    className: "grid"
  }, h(Sequence2, {
    d: [2400, 3000, 5000, 8000]
  }, h("div", null, "1"), h("div", null, "2"), h("div", null, "3"), h("div", null, "4")), h("div", null, "Peer 2"), h("video", {
    src: "assets/video/humusities2.mp4",
    className: "pink",
    autoplay: true,
    loop: true
  }))), h("article", null, h("div", {
    className: "grid"
  }, h("span", null, "architecture"), h("span", null, "humusities"), h("blockquote", null, "To find other members of a group, humusities use a", " ", h("i", null, "distributed hash table (DHT)"), ", a distributed system that provides a lookup service similar to Domain Names servers, but characterised by its autonomy and decentralization: the nodes collectively form the system without any central coordination.")), h("video", {
    className: "mesh",
    src: "assets/video/mesh.mp4",
    loop: true,
    autoplay: true
  }), h("div", {
    className: "grid"
  }, h("span", null, "Mesh"), h("span", null, "Generated mesh using Blender CAD recording and CSS brightness filter."), h("video", {
    className: "mesh",
    src: "assets/video/mesh.mp4",
    loop: true,
    autoplay: true
  })), h("center", null, "Distributed Hash Table (DHT)")), h("article", null, h("video", {
    className: "mesh",
    src: "assets/video/mesh.mp4",
    loop: true,
    autoplay: true
  })), h("article", null, h("video", {
    className: "mesh",
    src: "assets/video/mesh.mp4",
    loop: true,
    autoplay: true
  }), h("div", {
    className: "grid"
  }, h("span", null, "Size"), h("span", null, "300 x 65 px"), h("span", null), h("span", null, "Discrete, the application overlay the desktop and show minimal information with powerful semantics."), h("span", null, "Platforms"), h("span", null, "macOS (soon: Windows, Linux)"), h("span", null, "Download"), h("span", null, "https://github.com/humusities/parasite/releases/download/0.0.6/Humusities-darwin-x64-0.0.6.zip"), h("span", null, "Source Code"), h("span", null, "https://github.com/humusities/parasite/"), h("span", {
    style: "grid-column: span 2;"
  }, "Colors"), h("span", {
    style: "background: #363636"
  }), h("span", {
    style: "background: #000000"
  }), h("span", {
    style: "background: #ffffff"
  }), h("span", {
    style: "background: #f9f952"
  })), h("img", {
    style: "width: 350px; margin: auto;",
    src: "assets/images/hum.png"
  })), h("article", null, h("center", null, "The following will attempt to depict ", h("br", null), "the state of the Internet authority which humusities try to", " ", h("mark", null, "resist"), "."), h("center", null, "The following will attempt to depict ", h("br", null), "the state of the Internet authority which humusities try to", " ", h("mark", null, "reinvent"), "."), h("center", null, "The following will attempt to depict ", h("br", null), "the state of the Internet authority which humusities try to", " ", h("mark", null, "reject"), "."), h("center", null, "The following will attempt to depict ", h("br", null), "the state of the Internet authority which humusities try to", " ", h("mark", null, "reset"), ".")), h("article", null, h("center", {
    className: "grid"
  }, h("span", null, "Clandestine"), h("span", null, "Connection")), h("img", {
    style: "background: black",
    src: "https://www.vgrass.de/wp-content/uploads/2013/02/vlcsnap-2013-02-19-01h37m34s194.png"
  }), h("img", {
    style: "background: #ccb394; object-fit: cover; object-position: 0 0;",
    src: "https://66.media.tumblr.com/57a74ae51638c2ef15c779a53249c459/tumblr_n1cqp0s53y1qbbj19o1_1280.jpg"
  }), h("center", {
    className: "grid"
  }, h("span", null, "Resistance"), h("span", null, "in the Digital Age"))), h("article", {
    className: "cover"
  }, h("div", {
    className: "grid"
  }, h("img", {
    src: "https://louisedrulhe.fr/internet-atlas/img-web/en-gravite4.jpg"
  }), h("div", null, "opendatacity.de"), h("div", null, "Path taken by information (network packet), depending on the services involved Data recovered on opendatacity.de")), h("div", {
    className: "grid"
  }, h("img", {
    src: "https://louisedrulhe.fr/internet-atlas/img-web/relief33.svg"
  }), h("div", null, "Topographical map"), h("div", null, "Map of the top websites (and all their derived activities), according to Alexa, Louise Drulhe")), h("img", {
    src: "https://louisedrulhe.fr/internet-atlas/img-web/gravite1.jpg"
  }), h("div", {
    className: "grid"
  }, h(TLD, null), h("div", null, "Domain Name Authorities"), h("div", null, "Map of the Domain Name managers (.com, .nl, ...) according US located IANA who coordinates the sanity of the Internet."))), h("article", null, h("center", null, "The following video will show ", h("br", null), h("b", null, "Peter Sunde Kolmisoppi"), ", born 13 September 1978, alias", h("i", null, " brokep"), ".", h("br", null), "The Pirate Bay, co-founder of the world’s largest peer-to-peer file-sharing site."), h("div", null, h("blockquote", null, "In December, Gottfrid (i.e. one of the co-founder) was arrested in his home in Cambodia, extradited to Sweden and started to serve his prison sentence.", h("br", null), h("br", null), h("small", null, "TorrentFreak, February 2, 2013"))), h("div", {
    className: "grid"
  }, h("span", null, "The film is built around the court trial, from its beginning in 2009 through the appeal in 2010 and the Supreme Court rejection of further appeal in February 2012. What unfolds is a clash of cultures, between hackers and industry, between a technological intelligence that only needs an IRC channel as an office and explores unlimited opportunities and a business mind that looks for anything that increases — or threatens chances for profits."), h("blockquote", null, "One reason for making this film was that I couldn’t relate to the media industry’s claim that sharing files was a threat to creativity. To me, the unrestricted access to culture was the very spark in the online revolution, where every imaginable artistic expression exploded with creativity.", h("br", null), h("br", null), h("small", null, "Simon Klose, Director The Pirate Bay – Away From Keyboard, 2013")))), h("article", null, h("video", {
    src: "assets/video/afk.mp4",
    autoplay: true,
    loop: true
  })), h("article", null, h("center", null, "Request for Comments (RFC) is a ", h("i", null, "memorandum"), " document from the technology community describing methods, behaviors, research, or innovations applicable to Internet eco-system.", h("br", null), h("br", null), "The IETF (Internet Engineering Task Force) under the Internet Society adopts some of the proposals published as RFCs as Internet Standards."), h("iframe", {
    src: "assets/pages/RFC 793 - Transmission Control Protocol.html"
  }), h("iframe", {
    src: "assets/pages/RFC 2616 - Hypertext Transfer Protocol -- HTTP_1.1.html"
  }), h("iframe", {
    src: "assets/pages/RFC 5694 - Peer-to-Peer (P2P) Architecture Definition, Taxonomies, Examples, and Applicability.html"
  })));
};
css2`
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
