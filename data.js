var menu ={
	main: [
		{url: "computer", label: "Computer Menu >"},
		{url: "entertainment", label: "Entertainment Menu >"},
		{url: "family", label: "Family Menu >"},
		{url: "government", label: "Government Menu >"},
		{url: "health", label: "Health Menu >"},
		{url: "money", label: "Money Menu >"},
		{url: "news", label: "News Menu >"},
		{url: "reference", label: "Reference Menu >"},
		{url: "services", label: "Services Menu >"},
		{url: "social", label: "Social Menu >"},
		{url: "unclassified", label: "Unclassified Menu >"},
	],
	computer: [
		{url: "main", label: "< Main Menu"},
		{url: "apps", label: "Apps Menu >"},
		{url: "latex", label: "LaTeX Menu >"},
		{url: "linux", label: "Linux Menu >"},
		{url: "privacy", label: "Privacy Menu >"},
		{url: "programming", label: "Progamming Menu >"},
		{url: "unix", label: "Unix Menu >"},
	],
	apps: [
		{url: "computer", label: "< Computer Menu"},
		{url: "mygames", label: "Games Menu >"},
		{url: "myutilities", label: "Utilities Menu >"},
	],
	mygames: [
		{url: "apps", label: "< Apps Menu"},
		{url: "computer/apps/games/DealOrNoDeal/index.html", label: "Deal Or No Deal"},
		{url: "computer/apps/games/PegSolitaire/PegSolitaire.html", label: "Peg Solitaire"},
		{url: "computer/apps/games/VideoPoker/index.html", label: "VideoPoker"},
	],
	myutilities: [
		{url: "apps", label: "< Apps Menu"},
		{url: "computer/apps/utilities/ScoreKeeper/index.html", label: "ScoreKeeper"},
		{url: "computer/apps/utilities/Calculator/index.html", label: "Calculator"},
		{url: "computer/apps/utilities/VideoPokerHelper/index.html", label: "VideoPokerHelper"},
	],
	latex: [
		{url: "computer", label: "< Computer Menu"},
		{url: "https://github.com/VoLuong/Begin-Latex-in-minutes", label: "Begin-Latex-in-minutes"},
		{url: "https://www.ctan.org/", label: "CTAN: Comprehensive TeX Archive Network"},
		{url: "https://en.wikibooks.org/wiki/LaTeX", label: "LaTeX - Wikibooks, open books for an open world"},
		{url: "https://www.sharelatex.com/learn/Learn_LaTeX_in_30_minutes", label: "Learn LaTeX in 30 minutes - ShareLaTeX, Online LaTeX Editor"},
		{url: "https://www.sharelatex.com/learn/Pgfplots_package", label: "Pgfplots package - ShareLaTeX, Online LaTeX Editor"},
	],
	linux: [
		{url: "computer", label: "< Computer Menu"},
		{url: "https://github.com/LewisVo/Awesome-Linux-Software", label: "A list of awesome applications, softwares, tools and other materials for Linux distros."},
		{url: "https://0xax.gitbooks.io/linux-insides/content/", label: "Introduction · Linux Inside"},
		{url: "http://developer.linuxmint.com/", label: "Linux Mint Development Center by linuxmint"},
		{url: "https://help.ubuntu.com/community/Printers", label: "Printers - Community Help Wiki"},
		{url: "https://certification.ubuntu.com/certification/desktop/", label: "Ubuntu Desktop certified hardware | Ubuntu"},
		{url: "https://blog.linuxmint.com/?p=3478", label: "Linux Mint Installation Guide – The Linux Mint Blog"},
	],
	privacy: [
		{url: "computer", label: "< Computer Menu"},
		{url: "http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager07.html", label: "Adobe - Flash Player : Settings Manager - Website Storage Settings panel"},
		{url: "https://www.vpnbook.com/", label: "Free VPN • 100% Free PPTP and OpenVPN Service"},
		{url: "https://myactivity.google.com/myactivity", label: "Google - My Activity"},
		{url: "http://webkay.robinlinus.com/", label: "What every Browser knows about you"},
		{url: "https://whatismyipaddress.com/", label: "What Is My IP Address? IP Address Tools and More"},
		{url: "https://robinlinus.github.io/socialmedia-leak/", label: "Your Social Media Fingerprint"},
		{url: "http://www.vpngate.net/en/", label: "VPN Gate - Public Free VPN Cloud by Univ of Tsukuba, Japan"},
	],
	programming: [
		{url: "computer", label: "< Computer Menu"},
		{url: "c", label: "C Menu >"},
		{url: "challenges", label: "Challenges Menu >"},
		{url: "database", label: "Database Menu >"},
		{url: "general", label: "General Menu >"},
		{url: "golang", label: "Go Menu >"},
		{url: "java", label: "Java Menu >"},
		{url: "javascript", label: "JavaScript Menu >"},
		{url: "mobile", label: "Mobile Menu >"},
		{url: "php", label: "PHP Menu >"},
		{url: "python", label: "Python Menu >"},
		{url: "regex", label: "Regex Menu >"},
		{url: "web", label: "Web Menu >"},
	],
	c: [
		{url: "programming", label: "< Programming Menu"},
		{url: "http://graphics.stanford.edu/~seander/bithacks.html", label: "Bit Twiddling Hacks"},
		{url: "http://fragglet.github.io/c-algorithms/", label: "C Algorithms"},
		{url: "https://en.wikipedia.org/wiki/C_standard_library", label: "C standard library - Wikipedia"},
		{url: "http://libcello.org/", label: "Cello - High Level C"},
		{url: "http://c-faq.com", label: "comp.lang.c Frequently Asked Questions"},
		{url: "https://curl.haxx.se/", label: "curl"},
		{url: "https://developer.gnome.org/glib/stable", label: "GLib Reference Manual"},
		{url: "https://developer.gnome.org/json-glib/stable/", label: "JSON-GLib Reference Manual"},
		{url: "https://www.gnu.org/prep/standards/html_node", label: "GNU Coding Standards: Top"},
		{url: "http://goshdarnfunctionpointers.com/", label: "How Do I Declare a Function Pointer in C?"},
		{url: "https://curl.haxx.se/libcurl/", label: "libcurl - the multiprotocol file transfer library"},
		{url: "https://github.com/nothings/single_file_libs", label: "List of single-file C/C++ libraries."},
		{url: "https://www.imagemagick.org/script/magick-wand.php", label: "MagickWand, C API @ ImageMagick"},
		{url: "CPSC 223, Spring 2015", label: "Notes on Data Structures and Programming Techniques (CPSC 223, Spring 2015)"},
		{url: "http://ldeniau.web.cern.ch/ldeniau/cos.html", label: "Object Oriented Programming in C"},
		{url: "http://aggregate.org/MAGIC/#Absolute Value of a Float", label: "The Aggregate Magic Algorithms"},
		{url: "http://gcc.gnu.org/onlinedocs/cpp/Common-Predefined-Macros.html", label: "The C Preprocessor: Common Predefined Macros"},
		{url: "https://www.gtk.org/", label: "The GTK+ Project"},
		{url: "http://web.mit.edu/ghudson/dev/nokrb/third/libxml2/doc", label: "The XML C parser and toolkit of Gnome"},
	],
	challenges: [
		{url: "programming", label: "< Programming Menu"},
		{url: "https://projecteuler.net/", label: "Project Euler"},
	],
	database: [
		{url: "programming", label: "< Programming Menu"},
		{url: "http://www.sqlite.org/", label: "SQLite Home Page"},
		{url: "http://www.w3schools.com/sql/sql_quickref.asp", label: "SQL Quick Reference"},
	],
	general: [
		{url: "programming", label: "< Programming Menu"},
		{url: "http://ascii.cl/", label: "ASCII Codes"},
		{url: "http://www.bigocheatsheet.com/", label: "Big-O Algorithm Complexity Cheat Sheet"},
		{url: "https://character-map.tulz.io/", label: "Character Map of Unicode Characters"},
		{url: "http://overapi.com/", label: "Collecting all the cheat sheets"},
		{url: "https://github.com/", label: "GitHub"},
		{url: "https://stackoverflow.com/", label: "Stack Overflow"},
		{url: "http://tnerual.eriogerg.free.fr/vimqrc.html", label: "VIM Quick Reference Card"},
	],
	golang: [
		{url: "programming", label: "< Programming Menu"},
		{url: "https://golang.org/", label: "golang.org"},
                {url: "https://yourbasic.org/golang/", label: "Your basic Go"},
	],
	java: [
		{url: "programming", label: "< Programming Menu"},
		{url: "http://commons.apache.org/", label: "Apache Commons"},
		{url: "http://maven.apache.org/", label: "Apache Maven"},
		{url: "http://easymock.org/", label: "EasyMock"},
		{url: "http://docs.oracle.com/javase/7/docs/api/", label: "Java Platform SE 7"},
		{url: "http://docs.oracle.com/javase/8/docs/api", label: "Java Platform SE 8"},
		{url: "http://math.hws.edu/javanotes", label: "Javanotes 7.0 -- Title Page"},
		{url: "https://github.com/stleary/JSON-java", label: "JSON-java"},
		{url: "https://jsoup.org/", label: "jsoup"},
		{url: "http://junit.org/junit4/", label: "JUnit"},
		{url: "http://www.mvnrepository.com/", label: "Maven Repository"},
		{url: "http://www.slf4j.org/", label: "SLF4J"},
		{url: "https://bitbucket.org/asomov/snakeyaml", label: "SnakeYAML"},
	],
	javascript: [
		{url: "programming", label: "< Programming Menu"},
		{url: "https://github.com/mbeaudru/modern-js-cheatsheet", label: "Cheatsheet for the JavaScript knowledge you will frequently encounter in modern projects."},
		{url: "and modern", label: "ECMAScript 5 compatibility shims for legacy (and modern) JavaScript engines"},
		{url: "https://github.com/es-shims/es6-shim", label: "ECMAScript 6 compatibility shims for legacy JavaScript engines"},
		{url: "https://kangax.github.io/compat-table/es6/", label: "ECMAScript 6 compatibility table"},
		{url: "https://electron.atom.io/", label: "Electron | Build cross platform desktop apps with JavaScript, HTML, and CSS."},
		{url: "http://eloquentjavascript.net/code/", label: "Eloquent JavaScript :: Code Sandbox"},
		{url: "http://www.w3schools.com/jsref/", label: "JavaScript and HTML DOM Reference"},
		{url: "https://developer.mozilla.org/en-US/docs/Web/javascript", label: "JavaScript MDN"},
		{url: "https://msdn.microsoft.com/en-us/library/ms970435.aspx", label: "JavaScript MSDN"},
		{url: "https://www.w3schools.com/js/default.asp", label: "JavaScript Tutorial"},
		{url: "http://usejsdoc.org", label: "JsDoc"},
		{url: "http://jshint.com/", label: "JSHint, a JavaScript Code Quality Tool"},
		{url: "http://jslint.com/", label: "JSLint: The JavaScript Code Quality Tool"},
		{url: "https://github.com/google/traceur-compiler", label: "Traceur is a JavaScript.next-to-JavaScript-of-today compiler"},
		{url: "https://javascript.info/", label: "The Modern Javascript Tutorial"},
		{url: "https://plainjs.com/", label: "plainJS - The Vanilla JavaScript Repository"},
		{url: "https://medium.com/@jamestasha/tutorial-learn-node-js-4abda381635a", label: "Tutorial — Learn Node.js – tasha – Medium"},
	],
	mobile: [
		{url: "programming", label: "< Programming Menu"},
		{url: "https://colorsforcoders.com/", label: "Colors For Coders"},
	],
	php: [
		{url: "programming", label: "< Programming Menu"},
		{url: "http://www.phptherightway.com/", label: "PHP: The Right Way"},
		{url: "http://php.net/manual/en/index.php", label: "PHP Manual"},
		{url: "https://github.com/php/php-langspec", label: "GitHub - php/php-langspec: PHP Language Specification"},
		{url: "http://www.littleoceanwaves.com/securephp/", label: "Beginners Guide Introduction to Secure PHP Programming"},
		{url: "http://www.php.net/", label: "PHP: Hypertext Preprocessor"},
		{url: "https://www.smarty.net/", label: "PHP Template Engine | Smarty"},
	],
	python: [
		{url: "programming", label: "< Programming Menu"},
		{url: "https://github.com/vinta/awesome-python", label: "Awesome Python - A curated list of awesome Python frameworks"},
		{url: "http://www.pythonware.com/library/pil/handbook/index.htm", label: "PIL"},
		{url: "https://github.com/python-pillow/Pillow", label: "Pillow"},
		{url: "https://github.com/kivy/python-for-android", label: "Python for Android"},
		{url: "https://docs.python.org/2.7/", label: "Python 2.7 documentation"},
		{url: "https://wiki.python.org/moin/FrontPage", label: "Python Wiki"},
		{url: "http://pytorch.org/", label: "PyTorch"},
		{url: "https://scrapy.org/", label: "Scrapy | A Fast and Powerful Scraping and Web Crawling Framework"},
		{url: "http://sebastianraschka.com/Articles/2014_python_2_3_key_diff.html", label: "The key differences between Python 2.7.x and Python 3.x with examples"},
		{url: "https://wiki.python.org/moin/TkInter", label: "TkInter - Python Wiki"},
		{url: "http://infohost.nmt.edu/tcc/help/pubs/tkinter/web", label: "Tkinter 8.5 reference"},
	],
	regex: [
		{url: "programming", label: "< Programming Menu"},
		{url: "https://www.debuggex.com/", label: "Debuggex: Online visual regex tester. JavaScript, Python, and PCRE."},
	],
	web: [
		{url: "programming", label: "< Programming Menu"},
		{url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout", label: "Basic concepts of grid layout"},
		{url: "http://caniuse.com/", label: "Can I use... Support tables for HTML5, CSS3, etc"},
		{url: "http://browsershots.org/", label: "Check Browser Compatibility, Cross Platform Browser Test - Browsershots"},
		{url: "https://material.io/color/#!/?view.left=0&view.right=0", label: "Color Tool - Material Design"},
		{url: "http://www.w3schools.com/cssref/css3_browsersupport.asp", label: "CSS3 Browser Support Reference"},
		{url: "http://css3files.com/", label: "CSS3 properties exposed"},
		{url: "http://www.w3schools.com/cssref/default.asp", label: "CSS Reference"},
		{url: "https://validator.w3.org/", label: "HTML5/CSS Validation Service"},
		{url: "http://html5pattern.com/", label: "HTML5 Patterns"},
		{url: "http://www.w3schools.com/tags/default.asp", label: "HTML Element Reference"},
		{url: "https://jekyllrb.com/docs/home/", label: "jekyll"},
		{url: "http://api.jquery.com/", label: "jQuery API Documentation"},
		{url: "https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet", label: "Markdown Cheatsheet"},
		{url: "https://guides.github.com/features/mastering-markdown/", label: "Mastering Markdown"},
		{url: "https://www.hightools.net/minimizer.php", label: "Minifier"},
		{url: "https://tallys.github.io/color-theory/", label: "Practical Color Theory for People Who Code"},
		{url: "https://developer.apple.com/library/content/documentation/AppleApplications/Reference/SafariWebContent/Introduction/Introduction.html", label: "Safari Web Content Guide"},
		{url: "X", label: "Validator.nu (X)HTML5 Validator"},
		{url: "http://www.cssfontstack.com/", label: "Web Safe and Web Font Family with HTML and CSS code."},
		{url: "http://www.techbomb.com/websafe/", label: "Web safe colors palette"},
		{url: "http://jgthms.com/web-design-in-4-minutes/", label: "Web Design in 4 minutes"},
	],
	unix: [
		{url: "computer", label: "< Computer Menu"},
		{url: "http://vimsheet.com/", label: "A Great Vim Cheat Sheet"},
		{url: "https://manpages.bsd.lv/", label: "Practical UNIX Manuals: mdoc"},
		{url: "http://www.grymoire.com/Unix", label: "Welcome to The UNIX Grymoire!"},
	],
	entertainment: [
		{url: "main", label: "< Main Menu"},
		{url: "http://awoiaf.westeros.org/index.php/", label: "A Wiki of Ice and Fire"},
		{url: "http://agt.wikia.com/wiki/America%27s_Got_Talent_Wiki", label: "America's Got Talent Wiki "},
		{url: "http://bgt.wikia.com/wiki/Wiki_Content", label: "Britain's Got Talent Wiki"},
		{url: "http://www.celebritymoviearchive.com/", label: "Celebrity Movie Archive"},
		{url: "http://www.metal-archives.com/", label: "Encyclopaedia Metallum"},
		{url: "http://www.imdb.com/", label: "IMDb"},
		{url: "https://archive.org/", label: "Internet Archive"},
		{url: "http://www.isfdb.org/", label: "The Internet Speculative Fiction Database"},
		{url: "https://www.youtube.com/", label: "YouTube"},
		{url: "http://zap2it.com/", label: "Zap2It"},
	],
	family: [
		{url: "main", label: "< Main Menu"},
		{url: "https://bettyharmsen.github.io", label: "Betty's Favourite Links"},
		{url: "https://hharmsen.github.io", label: "Henry's Favourite Links"},
	],
	government: [
		{url: "main", label: "< Main Menu"},
		{url: "local", label: "Local Menu >"},
		{url: "https://www.canadapost.ca/web/en/home.page", label: "Canada Post"},
		{url: "https://www.epost.ca/service/landingPage.a", label: "Canada Post - ePost"},
		{url: "https://www.lnnte-dncl.gc.ca/index-eng", label: "Do Not Call List"},
		{url: "https://www.ontario.ca/page/renewable-energy-projects-listing", label: "Renewable Energy Projects Listing"},
		{url: "http://www.cra-arc.gc.ca/menu-eng.html", label: "Canada Revenue Agency"},
		{url: "http://www.cra-arc.gc.ca/myaccount/", label: "Revenue Canda - My Account for Individuals"},
		{url: "http://www.cra-arc.gc.ca/medical/", label: "Revenue Canada -  Eligible medical expenses"},
		{url: "http://www.servicecanada.gc.ca/eng/home.shtml", label: "Service Canada - Home "},
		{url: "https://www.ontario.ca/page/serviceontario", label: "ServiceOntario"},
		{url: "http://www.southwesthealthline.ca/index.aspx", label: "South West Health Line"},
	],
	local: [
		{url: "government", label: "< Government Menu"},
		{url: "http://centralelgin.org/", label: "Central Elgin"},
		{url: "http://centralelgin.civicwebcms.com/content/council", label: "Central Elgin - Council"},
		{url: "https://centralelgin.civicweb.net/filepro/documents", label: "Central Elgin - Documents"},
		{url: "https://www.centralelgin.org/en/municipal-office/municipal-office.aspx#", label: "Central Elgin - Municipal Office "},
		{url: "https://www.london.ca/residents/Roads-Transportation/Road-Construction/Pages/RoadReport.aspx", label: "City of London - Road Report"},
		{url: "http://stthomas.ca/", label: "City of St. Thomas"},
		{url: "http://stthomas.ca/content/construction-projects/", label: "City of St Thomas - Construction Projects"},
		{url: "http://www.elgincounty.ca/", label: "Elgin County"},
		{url: "http://www.elgincounty.ca/archives", label: "Elgin County - Archives"},
                {url: "https://lynhurst.condocommunities.com/communities/login/", label: "Elgin Vacant Land Condominium Corporation No. 31"},
		{url: "http://www.southwold.ca/", label: "Southwold"},
		{url: "https://stthomaspubliclibrary.ca/", label: "St. Thomas Public Library"},
		{url: "http://trackmyplow.com/", label: "Track My Plow"},
	],
	health: [
		{url: "main", label: "< Main Menu"},
		{url: "https://myresults.lifelabs.com/#/", label: "LifeLabs - My Results"},
		{url: "https://booking.lifelabs.com/LLBooking/Default.aspx", label: "LifeLabs - Online Appointment Booking"},
		{url: "https://www.getmaple.ca/", label: "See a Canadian doctor online | Maple"},
	],
	money: [
		{url: "main", label: "< Main Menu"},
		{url: "banks", label: "Banks Menu >"},
		{url: "condo", label: "Condo Menu >"},
		{url: "shopping", label: "Shopping Menu >"},
		{url: "utilities", label: "Utilities Menu >"},
	],
	banks: [
		{url: "money", label: "< Money Menu"},
		{url: "market", label: "Market Menu >"},
		{url: "http://www.bankofcanada.ca/rates/exchange/", label: "Bank of Canada - Exchange Rates"},
		{url: "https://www.myctfs.com/", label: "Canadian Tire Bank"},
		{url: "http://www.ci.com/web/home.jsp", label: "CI Investments"},
		{url: "http://www.oaken.com/", label: "Oaken Financial"},
		{url: "https://www.paypal.com/ca/webapps/mpp/home", label: "PayPal"},
		{url: "http://www.rbcroyalbank.com/personal.html", label: "RBC Royal Bank"},
		{url: "http://www.rdsp.com/", label: "RDSP"},
		{url: "https://simpletax.ca/", label: "SimpleTax"},
		{url: "https://www.sunlife.ca/", label: "Sun Life Financial"},
		{url: "https://www.tangerine.ca/en", label: "Tangerine"},
		{url: "https://www.td.com/about-tdbfg/our-business/index.jsp", label: "TD Bank Group"},
		{url: "https://easyweb.td.com/waw/idp/login.htm?execution=e1s1", label: "TDBank - EasyWeb"},
	],
	market: [
		{url: "banks", label: "< Banks Menu"},
		{url: "http://www.ratehub.ca/", label: "RateHub"},
		{url: "http://www.sunlifeglobalinvestments.com/Slgi-funds/Sun-Life-Milestone-Funds/Sun-Life-Milestone-2020-Fund?mp=SL20A&lang=en", label: "SunLife Milestone 2020"},
		{url: "http://www.sunlifeglobalinvestments.com/Slgi-funds/Sun-Life-Milestone-Funds/Sun-Life-Milestone-2025-Fund?mp=SL25A&lang=en", label: "SunLife Milestone 2025"},
		{url: "https://www.tangerine.ca/en/calculators/calculators.html#sbt", label: "Tangerine - Calculators"},
		{url: "https://ca.finance.yahoo.com/", label: "Yahoo Finance Canada"},
	],
	condo: [
		{url: "money", label: "< Money Menu"},
		{url: "https://www.condoauthorityontario.ca/en-US/", label: "The Condominium Authority of Ontario"},
	],
	shopping: [
		{url: "money", label: "< Money Menu"},
		{url: "furniture", label: "Furniture Menu >"},
		{url: "grocery", label: "Grocery Menu >"},
		{url: "https://www.amazon.ca/", label: "Amazon Canada"},
		{url: "https://www.amazon.com/", label: "Amazon"},
		{url: "http://www.bestbuy.ca/", label: "Best Buy Canada"},
		{url: "http://www.canadiantire.ca/en.html", label: "Canadian Tire"},
		{url: "http://www.dellauction.com/", label: "Dell Auction Site"},
		{url: "http://www.ebay.ca/", label: "eBay Canada"},
		{url: "http://www.ebay.com/", label: "eBay"},
		{url: "http://www.fcsurplus.ca/shopping/default.asp", label: "Forest City Surplus"},
		{url: "https://www.homedepot.ca/en/home.html", label: "Home Depot Canada"},
		{url: "http://www.homehardware.ca/en/index.htm/", label: "Home Hardware"},
		{url: "https://www.lowes.ca/", label: "Lowes Canada"},
		{url: "http://www.rona.ca/en", label: "Rona"},
		{url: "http://www.staples.ca/", label: "Staples®"},
		{url: "http://www.thebrick.com/", label: "The Brick"},
		{url: "https://www.thesource.ca/", label: "The Source"},
		{url: "http://www.tigerdirect.ca/", label: "TigerDirect"},
		{url: "http://www.walmart.ca/en", label: "Walmart Canada"},
	],
	furniture: [
		{url: "shopping", label: "< Shopping Menu"},
		{url: "http://www.accentshomefurniture.com/", label: "Accents home furniture - London, ON"},
		{url: "http://www.badboy.ca/", label: "Bad Boy"},
		{url: "https://www.homesense.ca/en", label: "Bed, Bath, Kitchen, Storage, Home  Outdoor Décor | HomeSense"},
		{url: "http://www.directbuy.com/", label: "DirectBuy"},
		{url: "http://dot-furniture.com/store/", label: "DOT Furniture"},
		{url: "http://www.furniturelondon.ca/", label: "Furniture Source Warehouse"},
		{url: "http://www.ikea.com/ca/en/", label: "IKEA"},
		{url: "http://www.jenningsfurniture.com/", label: "Jennings Furniture"},
		{url: "https://www.jysk.ca/", label: "JYSK Canada"},
		{url: "http://www.la-z-boy.com/", label: "La-Z-Boy"},
		{url: "http://www.motivointeriors.com/", label: "Motivo Interiors"},
		{url: "https://www.pier1.ca/", label: "Pier 1 Imports"},
		{url: "https://www.structube.com/en/our-stores/london-smartcentres-london-north", label: "SmartCentres"},
		{url: "http://www.solutions-stores.ca/", label: "Solutions"},
		{url: "http://www.surplusfurniture.com/", label: "Surplus Furniture  Mattress Warehouse"},
		{url: "http://www.sutherlandsfurniture.com/", label: "Sutherlands Furniture"},
		{url: "http://www.teppermans.com/", label: "Teppermans"},
		{url: "http://bedroomfurnituregallery.com/", label: "The Bedroom Furniture Gallery"},
		{url: "http://www.mennoniteshop.com/", label: "The Mennonite Furniture Shop"},
		{url: "http://www.tableandchair.ca/main/", label: "The Table  Chair Co."},
		{url: "http://tradsfurniture.com/", label: "Trads Furniture Store"},
		{url: "http://www.urbanbarn.com/", label: "Urban Barn"},
		{url: "https://www.wayfair.ca/", label: "Wayfair Canada"},
		{url: "http://c-faq.com/aryptr/pass2dary.html", label: "Question 6.18"},
	],
	grocery: [
		{url: "shopping", label: "< Shopping Menu"},
		{url: "http://briwoodfarmmarket.com/", label: "Briwood Farm Market"},
		{url: "http://foodland.ca/", label: "Foodland"},
		{url: "https://www.metro.ca/en", label: "Metro"},
		{url: "https://www.realcanadiansuperstore.ca/", label: "The Real Canadian Superstore"},
		{url: "https://www1.shoppersdrugmart.ca/en/home", label: "Shoppers Drug Mart"},
	],
	utilities: [
		{url: "money", label: "< Money Menu"},
		{url: "https://mybell.bell.ca", label: "Bell Canada"},
		{url: "https://www.myaccount.hydroone.com/unsecure/EC/ecustomer/en/user/ECCustomerSignInPage.html", label: "HydroOne"},
		{url: "https://secure6.i-doxs.net/Reliance/Default.aspx", label: "Reliance Home Comfort"},
		{url: "http://www.rogers.com", label: "Rogers"},
		{url: "http://www.sttenergy.com/", label: "St. Thomas Energy"},
		{url: "https://www.oeb.ca/rates-and-your-bill/electricity-rates/time-use-holiday-schedule", label: "Time-of-use holiday schedule | Ontario Energy Board"},
		{url: "https://myaccount.uniongas.com/login.aspx?ReturnUrl=%2f", label: "Union Energy"},
	],
	news: [
		{url: "main", label: "< Main Menu"},
		{url: "bbc", label: "BBC News Menu >"},
		{url: "cbc", label: "CBC News Menu >"},
		{url: "ctv", label: "CTV News Menu >"},
		{url: "reddit", label: "Reddit >"},
		{url: "weather", label: "Weather >"},
		{url: "https://news.ycombinator.com/", label: "Hacker News"},
		{url: "https://www.lfpress.com/", label: "London Free Press"},
		{url: "https://news.nationalpost.com/category/news/world", label: "National Post"},
		{url: "https://www.sciencedaily.com/", label: "ScienceDaily"},
		{url: "https://slashdot.org/", label: "Slashdot"},
		{url: "https://www.stthomastimesjournal.com/", label: "St. Thomas Times-Journal"},
		{url: "http://www.stthomastoday.ca/", label: "St. Thomas Today"},
	],
	bbc: [
		{url: "news", label: "< News Menu"},
 		{url: "http://www.bbc.com/news", label: "BBC News"},
		{url: "https://www.bbc.com/news/science_and_environment", label: "BBC News - Science"},
		{url: "https://www.bbc.com/news/technology", label: "BBC News - Technology"},
		{url: "https://www.bbc.com/news/world", label: "BBC News - World News"},
	],
	cbc: [
		{url: "news", label: "< News Menu"},
		{url: "https://www.cbc.ca/news", label: "CBC News"},
		{url: "https://www.cbc.ca/technology", label: "CBC News - Technology and Science"},
		{url: "https://www.cbc.ca/world", label: "CBC News - World"},
	],
        ctv: [
		{url: "news", label: "< News Menu"},
		{url: "https://www.ctvnews.ca/", label: "CTV News"},
		{url: "https://kitchener.ctvnews.ca/", label: "CTV News - Kitchener"},
		{url: "https://london.ctvnews.ca/", label: "CTV News - London"},
		{url: "https://www.ctvnews.ca/sci-tech", label: "CTV News - Science and Technology"},
		{url: "https://www.ctvnews.ca/world", label: "CTV News - World News"},
        ],
	reddit: [
		{url: "news", label: "< News Menu"},
		{url: "https://www.reddit.com/r/canada/", label: "Canada"},
		{url: "https://www.reddit.com/r/science/", label: "Science"},
		{url: "https://www.reddit.com/r/worldnews/", label: "World News"},
	],
	weather: [
		{url: "news", label: "< News Menu"},
		{url: "http://www.accuweather.com/en/ca/st-thomas/n5p/weather-forecast/54997", label: "AccuWeather - St. Thomas Weather"},
		{url: "http://www.cbc.ca/weather/s0000329.html", label: "CBC Weather - St. Thomas"},
		{url: "http://weather.gc.ca/city/pages/on-98_metric_e.html", label: "Environment Canada - St. Thomas Weather"},
		{url: "https://www.theweathernetwork.com/ca/weather/ontario/st-thomas", label: "The Weather Network - St. Thomas"},
	],
	reference: [
		{url: "main", label: "< Main Menu"},
		{url: "dictionaries", label: "Dictionaries Menu >"},
		{url: "maps", label: "Maps Menu >"},
		{url: "phone", label: "Phone Menu >"},
		{url: "search", label: "Search Menu >"},
		{url: "http://www.canadafacts.org/", label: "Canada Facts"},
		{url: "https://www.cia.gov/library/publications/the-world-factbook/", label: "CIA World Factbook"},
		{url: "https://clinicaltrials.gov/", label: "ClinicalTrials"},
		{url: "https://www.ncbi.nlm.nih.gov/pubmed/", label: "PubMed"},
	],
	dictionaries: [
		{url: "reference", label: "< Reference Menu"},
		{url: "http://www.dictionary.com/", label: "Dictionary.com | Meanings and Definitions of Words at Dictionary.com"},
		{url: "http://www.urbandictionary.com/", label: "Urban Dictionary"},
		{url: "https://en.wiktionary.org/wiki/Wiktionary:Main_Page", label: "Wiktionary"},
	],
	maps: [
		{url: "reference", label: "< Reference Menu"},
		{url: "http://www.nrcan.gc.ca/earth-sciences/geography/atlas-canada", label: "Atlas of Canada"},
		{url: "https://www.bing.com/mapspreview", label: "Bing Maps"},
		{url: "http://digital.library.mcgill.ca/CountyAtlas/", label: "County Atlas"},
		{url: "https://www.google.ca/maps/", label: "Google Maps"},
		{url: "http://www.elginmapping.ca/", label: "Elgin Mapping"},
		{url: "http://www.historicmapworks.com/", label: "Historic Map Works"},
		{url: "https://www.ontario.ca/page/land-information-ontario", label: "Land Information Ontario"},
		{url: "https://geographic.org/streetview/canada/on/city_of_st_thomas.html", label: "List of Street Names in City of St. Thomas, Ontario, Maps and Street Views, Geographic.org"},
		{url: "https://www.mapquest.com/search", label: "MapQuest"},
		{url: "https://www.google.com/earth/", label: "Google Earth"},
		{url: "https://maps.yahoo.com/b/", label: "Yahoo Maps"},
	],
	phone: [
		{url: "reference", label: "< Reference Menu"},
		{url: "http://www.canada411.ca/", label: "Canada411"},
		{url: "http://www.canpages.ca/", label: "Canpages"},
		{url: "http://www.whitepages.ca/", label: "Whitepages"},
		{url: "http://www.yellowpages.ca/", label: "YellowPages"},
	],
	search: [
		{url: "reference", label: "< Reference Menu"},
		{url: "http://www.bing.com/", label: "Bing"},
		{url: "https://duckduckgo.com/", label: "DuckDuckGo"},
		{url: "https://www.google.ca/?gfe_rd=cr&ei=bfT3V7DnNM3AqAXFqqWgDg", label: "Google"},
		{url: "https://www.startpage.com/", label: "StartPage"},
		{url: "https://en.wikipedia.org/wiki/Main_Page", label: "Wikipedia"},
		{url: "https://ca.search.yahoo.com/", label: "Yahoo Search"},
	],
	services: [
		{url: "main", label: "< Main Menu"},
		{url: "cloud", label: "Cloud Menu >"},
		{url: "email", label: "Email Menu >"},
	],
	cloud: [
		{url: "services", label: "< Services Menu"},
		{url: "https://www.dropbox.com/", label: "Dropbox"},
		{url: "https://accounts.google.com/ServiceLogin?service=writely&passive=1209600&continue=https://docs.google.com/%23&followup=https://docs.google.com/&ltmpl=homepage&emr=1#identifier", label: "Google Docs"},
		{url: "https://www.icloud.com/", label: "iCloud"},
		{url: "https://onedrive.live.com/about/en-gb/", label: "OneDrive"},
	],
	email: [
		{url: "services", label: "< Services Menu"},
		{url: "https://accounts.google.com/ServiceLogin?service=mail&passive=true&rm=false&continue=https://mail.google.com/mail/&ss=1&scc=1&ltmpl=default&ltmplcache=2&emr=1&osid=1#identifier", label: "Gmail"},
		{url: "https://login.live.com/login.srf?wa=wsignin1.0&ct=1475518983&rver=6.6.6556.0&wp=MBI_SSL&wreply=https:%2F%2Foutlook.live.com%2Fowa%2F&id=292841&CBCXT=out&cobrandid=90015", label: "Outlook"},
		{url: "http://ca.mail.yahoo.com/", label: "Yahoo Mail"},
	],
	social: [
                {url: "main", label: "< Main Menu"},
		{url: "https://www.facebook.com/", label: "Facebook"},
		{url: "https://plus.google.com/", label: "Google+"},
		{url: "https://www.linkedin.com/", label: "LinkedIn"},
		{url: "https://twitter.com/", label: "Twitter"},
	],
        unclassified: [
		{url: "main", label: "< Main Menu"},
		{url: "https://cp.easydns.com/login.php", label: "easyDNS"},
		{url: "http://www.kijiji.ca/h-london/1700214", label: "Kijiji - London"},
		{url: "https://myenroute.cooperators.ca/ipaid/views/caslogin.do?service=https%3A%2F%2Fmyenroute.cooperators.ca%2Fipaid%2F", label: "My En-route"},
		{url: "http://www.olg.ca/index.jsp", label: "OLG"},
		{url: "https://www.xsusenet.com/", label: "XS Usenet"},
	],
};
