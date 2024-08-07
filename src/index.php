<?php require("./components/error/error.php") ?>
<?php require("./components/connection/connect.php") ?>
<?php require("./components/segment/get_info.php") ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="author" content="Samvel Gevorgyan, gsamvel2005@gmail.com">
    <meta name="description" content="Official Portfolio">
    <meta name="subject" content="Portfolio">
    <meta name="keywords" content="Portfolio, CV, Samvel, Gevorgyan, WEB, Front, Back, Front-End, Back-End, Developer">
    <link rel="icon" href="./assets/Sam.png">
    <link rel="stylesheet" href="./css/style.css">
    <title>Samvel Gevorgyan</title>
</head>
<body class="color-1">
    <div class="mouse"></div>




                                        <!-- ----- ----- ---------- ---- ----- ----- -->
                                        <!-- ----- ----- Navigation Menu ----- ----- -->
                                        <!-- ----- ----- ---------- ---- ----- ----- -->




    <nav>
        <div class="navParent">
            <div class="logoParent">
                <div class="logo">
                    <img src="./assets/Sam.jpg">
                </div>
            </div>
            <div class="menuParent">
                <div class="menu">
                    <ul>
                        <li>
                            <a href="#home" class="active">
                                <i class="fa-solid fa-house"></i>
                                home
                            </a>
                        </li>
                        <li>
                            <a href="#about">
                                <i class="fa-solid fa-user"></i>
                                about
                            </a>
                        </li>
                        <li>
                            <a href="#skills">
                                <i class="fa-solid fa-code"></i>
                                skills
                            </a>
                        </li>
                        <li>
                            <a href="#works">
                                <i class="fa-solid fa-laptop"></i>
                                works
                            </a>
                        </li>
                        <li>
                            <a href="#contact">
                                <i class="fa-regular fa-comment"></i>
                                contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="mobileMenuToggle">
                <div class="menuToggle"></div>
            </div>
        </div>
        <div class="mobileMenuParent">
            <div class="mobileMenu">
                <a href="#home" class="active">
                    <div>
                        <i class="fa-solid fa-house"></i>
                        <span>home</span>
                    </div>
                </a>
                <a href="#about">
                    <div>
                        <i class="fa-solid fa-user"></i>
                        <span>about</span>
                    </div>
                </a>
                <a href="#skills">
                    <div>
                        <i class="fa-solid fa-code"></i>
                        <span>skills</span>
                    </div>
                </a>
                <a href="#works">
                    <div>
                        <i class="fa-solid fa-laptop"></i>
                        <span>works</span>
                    </div>
                </a>
                <a href="#contact">
                    <div>
                        <i class="fa-regular fa-comment"></i>
                        <span>contact</span>
                    </div>
                </a>
            </div>
        </div>
    </nav>




                                        <!-- ----- ----- ---- ----- ----- -->
                                        <!-- ----- ----- Home ----- ----- -->
                                        <!-- ----- ----- ---- ----- ----- -->




    <header>
        <section id="home">
            <div class="homeParent">
                <div class="contentParent">
                    <h2>my name is</h2>
                    <h1>Samvel <span>Gevorgyan</span></h1>
                    <h3>web developer</h3>
                    <p>this is my official portfolio website to shows all details and work experience web development</p>
                </div>
                <div class="imgParent">
                    <img src="./assets/Sam.jpg">
                </div>
            </div>
        </section>
        <div class="settingsParent open">
            <div class="btnParent">
                <div class="themeParent">
                    <i class="fa-solid fa-moon"></i>
                </div>
                <div class="settingsBtn">
                    <i class="fa-solid fa-gear"></i>
                </div>
            </div>
            <div class="colorsParent">
                <div class="colors color-1"></div>
                <div class="colors color-2"></div>
                <div class="colors color-3"></div>
                <div class="colors color-4"></div>
                <div class="colors color-5"></div>
            </div>
        </div>
    </header>




                                        <!-- ----- ----- ----- ----- ----- -->
                                        <!-- ----- ----- About ----- ----- -->
                                        <!-- ----- ----- ----- ----- ----- -->




    <main>
        <section id="about" class="allSectionParents">
            <div class="aboutParent sectionWidthParent">
                <div id="aboutAnimationParent">
                    <div class="aboutHeader sectionHeader">
                        <h2>my bio</h2>
                        <h1>about <span>me</span></h1>
                    </div>
                    <div class="aboutContentParent">
                        <div class="aboutImgParent">
                            <div class="aboutImg">
                                <img src="./assets/Sam.jpg">
                            </div>
                        </div>
                        <div class="aboutContent">
                            <h1>Hi, I'm <span>Samvel,</span> Based In Armenia</h1>
                            <h2>I am a full-stack web developer with expertise in both front-end and back-end technologies. I have extensive experience in creating successful and responsive websites that are fast, easy to use, and visually appealing.</h2>
                            <div class="dateParent">
                                <div class="data">
                                    <p>Birthday:</p>
                                    <p>Phone:</p>
                                    <p>Email:</p>
                                    <p>From:</p>
                                    <p>Freelance:</p>
                                </div>
                                <div>
                                    <p>January 2005</p>
                                    <p>
                                        <a href="tel:+37493198124">+374 93 198 124</a>
                                    </p>
                                    <p>gsamvel2005@gmail.com</p>
                                    <p>Armenia, Musaler</p>
                                    <p>Available</p>
                                </div>
                            </div>
                            <a href="#about" download="">
                                <button class="download">Download CV</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>




                                        <!-- ----- ----- ------ ----- ----- -->
                                        <!-- ----- ----- Skills ----- ----- -->
                                        <!-- ----- ----- ------ ----- ----- -->




        <section id="skills" class="allSectionParents">
            <div class="skillsParent sectionWidthParent">
                <div id="skillsAnimationParent">
                    <div class="skillsHeader sectionHeader">
                        <h2>Learning Path</h2>
                        <h1>my <span>skills</span></h1>
                    </div>
                    <div class="skillsContentParent">
                        <div class="skillsContent">
                            <div class="skillsContentChild">
                                <div class="child">
                                    <i class="fa-solid fa-laptop-code"></i>
                                </div>
                                <div class="child">
                                    <h3>Design, Development</h3>
                                    <p>clean, modern designs - optimized for performance, search engines, and converting users to customers</p>
                                </div>
                            </div>
                            <div class="skillsContentChild">
                                <div class="child">
                                    <i class="fa-solid fa-code"></i>
                                </div>
                                <div class="child">
                                    <h3>Functionality</h3>
                                    <p>Combining the latest technological advances to optimize system performance</p>
                                </div>
                            </div>
                            <div class="skillsContentChild">
                                <div class="child">
                                    <i class="fa-solid fa-mobile"></i>
                                </div>
                                <div class="child">
                                    <h3>Always Responsive</h3>
                                    <p>a responsive design makes your website accessible to all users, regardless of their device</p>
                                </div>
                            </div>
                        </div>
                        <div class="progressParent">
                            <div class="progressChild">
                                <div>
                                    <div class="progress js">
                                        <h2>JS</h2>
                                        <div class="progressbar"></div>
                                    </div>
                                    <div class="progress php">
                                        <h2>PHP</h2>
                                        <div class="progressbar"></div>
                                    </div>
                                    <div class="progress mysql">
                                        <h2>MySQL / PostgreSQL</h2>
                                        <div class="progressbar"></div>
                                    </div>
                                    <div class="progress git">
                                        <h2>Git / GitHub</h2>
                                        <div class="progressbar"></div>
                                    </div>
                                    <div class="progress docker">
                                        <h2>Docker</h2>
                                        <div class="progressbar"></div>
                                    </div>
                                </div>
                                <div>
                                    <div class="progress laravel">
                                        <h2>Laravel</h2>
                                        <div class="progressbar"></div>
                                    </div>
                                    <div class="progress jquery">
                                        <h2>JQuery</h2>
                                        <div class="progressbar"></div>
                                    </div>
                                    <div class="progress bootstrap">
                                        <h2>Bootstrap</h2>
                                        <div class="progressbar"></div>
                                    </div>
                                    <div class="progress html">
                                        <h2>HTML / CSS</h2>
                                        <div class="progressbar"></div>
                                    </div>
                                    <div class="progress sass">
                                        <h2>SASS / SCSS</h2>
                                        <div class="progressbar"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>




                                        <!-- ----- ----- ----- ----- ----- -->
                                        <!-- ----- ----- Works ----- ----- -->
                                        <!-- ----- ----- ----- ----- ----- -->




        <section id="works" class="allSectionParents">
            <div class="worksParent sectionWidthParent">
                <div id="worksAnimationParent">
                    <div class="worksHeader sectionHeader">
                        <h2>my portfolio</h2>
                        <h1>recent <span>works</span></h1>
                    </div>
                    <div class="worksContentParent">
                        <div class="worksContent">
                            <a href="https://github.com/GevorgyanSam/Photographer" target="_blank">
                                <div class="worksImageParent">
                                    <img src="./assets/project1.jpg">
                                </div>
                                <div>
                                    <h3>Photographer</h3>
                                    <p>Life is an adventure. Capture every minute.</p>
                                </div>
                            </a>
                        </div>
                        <div class="worksContent">
                            <a href="https://github.com/GevorgyanSam/Fashion-Shop" target="_blank">
                                <div class="worksImageParent">
                                    <img src="./assets/project2.jpg">
                                </div>
                                <div>
                                    <h3>Fashion Shop</h3>
                                    <p>Change Your Life. New Style Fashion.</p>
                                </div>
                            </a>
                        </div>
                        <div class="worksContent">
                            <a href="https://github.com/GevorgyanSam/Flash" target="_blank">
                                <div class="worksImageParent">
                                    <img src="./assets/project3.jpg">
                                </div>
                                <div>
                                    <h3>Flash</h3>
                                    <p>Photography is not a sport.</p>
                                </div>
                            </a>
                        </div>
                        <div class="worksContent">
                            <a href="https://github.com/GevorgyanSam/Impossible-Bureau" target="_blank">
                                <div class="worksImageParent">
                                    <img src="./assets/project4.jpg">
                                </div>
                                <div>
                                    <h3>Impossible Bureau</h3>
                                    <p>We Go Forward. Only Forward.</p>
                                </div>
                            </a>
                        </div>
                        <div class="worksContent">
                            <a href="http://dvr.neanet.am:8080" target="_blank">
                                <div class="worksImageParent">
                                    <img src="./assets/project5.jpg">
                                </div>
                                <div>
                                    <h3>SpyBird</h3>
                                    <p>Chat Application.</p>
                                </div>
                            </a>
                        </div>
                        <div class="worksContent">
                            <a href="https://github.com/GevorgyanSam/DataBase" target="_blank">
                                <div class="worksImageParent">
                                    <img src="./assets/project6.jpg">
                                </div>
                                <div>
                                    <h3>Blog</h3>
                                    <p>Personal Blog.</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>




                                        <!-- ----- ----- ------- ----- ----- -->
                                        <!-- ----- ----- Contact ----- ----- -->
                                        <!-- ----- ----- ------- ----- ----- -->




        <section id="contact" class="allSectionParents">
            <div class="contactParent sectionWidthParent">
                <div id="contactAnimationParent">
                    <div class="contactHeader sectionHeader">
                        <h2>get in touch</h2>
                        <h1>contact <span>me</span></h1>
                    </div>
                    <div class="successParent">
                        <div class="success">
                            <div>
                                <i class="fa-solid fa-user-check firstCheck"></i>
                                <i class="fa-solid fa-envelope-circle-check secondCheck"></i>
                                <h3>Message Sent Successfuly</h3>
                            </div>
                        </div>
                    </div>
                    <div class="contactContentParent">
                        <div class="contactFormParent">
                            <form autocomplete="off" method="POST">
                                <div class="contactForm">
                                    <input type="hidden" id="guestId" value="<?=$guest_id?>">
                                    <div class="formItem formItem1">
                                        <input type="text" id="name" autocomplete="off">
                                        <label for="name" id="nameLabel" class="notValid">Name</label>
                                        <i class="fa-regular fa-user"></i>
                                    </div>
                                    <div class="formItem formItem2">
                                        <input type="text" id="lastName" autocomplete="off">
                                        <label for="lastName" id="lastNameLabel" class="notValid">Last Name</label>
                                        <i class="fa-regular fa-user"></i>
                                    </div>
                                </div>
                                <div class="contactForm">
                                    <div class="formItem formItem3">
                                        <input type="email" id="email" autocomplete="off">
                                        <label for="email" id="emailLabel" class="notValid">Email</label>
                                        <i class="fa-solid fa-at"></i>
                                    </div>
                                    <div class="formItem formItem4">
                                        <input type="text" id="subject" autocomplete="off" class="notValid">
                                        <label for="subject" id="subjectLabel" class="notValid">Subject</label>
                                        <i class="fa-regular fa-envelope"></i>
                                    </div>
                                </div>
                                <div class="contactForm">
                                    <div class="formItem formItem5">
                                        <textarea id="message" autocomplete="off"></textarea>
                                        <label for="message" id="messageLabel" class="notValid">Message</label>
                                    </div>
                                </div>
                                <div class="contactForm">
                                    <div class="formItem formItem6">
                                        <button type="submit" id="submit">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="contactInfoParent">
                            <div>
                                <div>
                                    <h3>Get Contact</h3>
                                </div>
                                <div class="contactSocialParent">
                                    <a href="https://www.instagram.com/samvel.2005.g/" target="_blank" title="Instagram">
                                        <i class="fa-brands fa-instagram"></i>
                                    </a>
                                    <a href="https://github.com/GevorgyanSam" target="_blank" title="GitHub">
                                        <i class="fa-brands fa-github"></i>
                                    </a>
                                    <a href="https://t.me/GSam2005" target="_blank" title="Telegram">
                                        <i class="fa-regular fa-paper-plane"></i>
                                    </a>
                                    <a href="tel:+37493198124" target="_blank" title="Phone">
                                        <i class="fa-solid fa-phone"></i>
                                    </a>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <h3>Phone</h3>
                                </div>
                                <div>
                                    <p title="Phone">
                                        <i class="fa-solid fa-phone"></i>
                                        +374 (93)-19-81-24
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <h3>E-Mail</h3>
                                </div>
                                <div>
                                    <p title="Email">
                                        <i class="fa-regular fa-envelope"></i>
                                        gsamvel2005@gmail.com
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <h3>Address</h3>
                                </div>
                                <div>
                                    <p title="Address">
                                        <i class="fa-solid fa-location-dot"></i>
                                        Armenia, Armavir
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>




                                        <!-- ----- ----- ------ ----- ----- -->
                                        <!-- ----- ----- Footer ----- ----- -->
                                        <!-- ----- ----- ------ ----- ----- -->




    <footer>
        <section id="footer">
            <div class="footerParent">
                <div class="footerAnimationParent">
                    <div class="backToTop">
                        <a href="#home">
                            <div>back to top</div>
                        </a>
                    </div>
                    <div class="footerContent">
                        <a href="https://www.instagram.com/samvel.2005.g/" target="_blank">
                            <div class="content">
                                <i class="fa-brands fa-instagram"></i>
                            </div>
                        </a>
                        <a href="https://t.me/GSam2005" target="_blank">
                            <div class="content">
                                <i class="fa-regular fa-paper-plane"></i>
                            </div>
                        </a>
                        <a href="https://github.com/GevorgyanSam" target="_blank">
                            <div class="content">
                                <i class="fa-brands fa-github"></i>
                            </div>
                        </a>
                        <a href="mailto: gsamvel2005@gmail.com" target="_blank">
                            <div class="content">
                                <i class="fa-regular fa-envelope"></i>
                            </div>
                        </a>
                        <a href="tel:+37493198124" target="_blank">
                            <div class="content">
                                <i class="fa-solid fa-phone"></i>
                            </div>
                        </a>
                    </div>
                    <div class="copyright">
                        <div>
                            <span>©</span>
                            <span class="currentYear"></span>
                            <span> - Samvel Gevorgyan</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </footer>
    <script src="./js/script.js"></script>
</body>
</html>
