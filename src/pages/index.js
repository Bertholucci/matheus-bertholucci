import React from 'react';

import Layout from '../components/Layout';

// import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';
import pdf from '../assets/Matheus.pdf'

const IndexPage = () => (
  <Layout>
    <Sidebar />

    <div className="container-fluid p-0">
          <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
               <div className="w-100">
                    <h1 className="mb-0"> {config.firstName} <span className="text-primary pattern-spacing">{config.lastName}</span> </h1>

                    <div className="subheading mb-5">
                         {config.address} 
                         
                         <span class="contact-side"/> 
                              <a className="whatsapp-link" href="https://api.whatsapp.com/send?phone=5519996081843"> {config.phone} </a> 
                              <span class="contact-side"/>
                         <a href={`mailto:${config.email}`}>{config.email}</a>
                    </div>

                    <p className="lead mb-5">
                         Olá, meu nome é Matheus Bertholucci Mendonça. Seja bem-vindo! &#x1F601;
                         Sou um desenvolvedor back-end, onde trabalho principalmente
                         com Java, mais especificamente Spring e Spring Boot. Além disso, me aventuro um pouco em NodeJS e tenho criar telas
                         com Angular.
                    </p>

                    <div className="social-icons">
                         {config.socialLinks.map(social => {
                              const { icon, url, name} = social;
                              return (
                                   <div class="cards">
                                        <a key={url} href={url} className={name}>
                                             <i className={`fab ${icon}` }></i>
                                        </a>

                                        <span className="social-media-bottom"> {name}</span>
                                   </div>
                              );
                         })}
                         <div class="cards">
                              <a href={pdf} className={`curriculo`} download>
                                   <i className={`fas fa-file-pdf`}></i>
                              </a>

                              <span className="social-media-bottom"> Currículo </span>
                         </div>
                    </div>


               </div>
          </section>

          <hr className="m-0" />

          <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
               <div className="w-100">
                    <h2 className="mb-5">Experiência</h2>

                    <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                         <div className="resume-content">
                              <h3 className="mb-0">Desenvolvedor Full-stack Júnior</h3>
                              <div className="subheading mb-3 arthais">Arthais Systems</div>
                                   <p>
                                   Como desenvolvedor, tenho a oportunidade de trabalhar em projetos de sustentação e desenvolvimento de novos módulos e features, principalmente orientado a microsserviços, para grandes empresas do ramo da saúde, tecnologia e financeiro.
                                   Trabalho principalmente com:
                                   Java, utilizando o Spring Framework para a construção de endpoints e APIs REST.
                                   Recursos da AWS, como DynamoDB, ElasticStack,
                                   Testes unitários com JUnit.
                                   Typescript, com framework Angular para o front-end, além de Bootstrap 4, HTML5, CSS3 e Javascript ES6+.
                                   Versionadores de código, como Git (Github, Bitbucket), além de SNV (Tortoise).
                                   Metodologias ágeis, como Kanban, Scrum e EX.
                                   </p>
                         </div>

                         <div className="resume-date text-md-right">
                              <span className="text-primary">Agosto 2021 - Presente</span>
                         </div>
                    </div>

                    <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                         <div className="resume-content">
                              <h3 className="mb-0">Instrutor de cursos</h3>
                              <div className="subheading mb-3 people">People Tech and English</div>
                                   <p>
                                   Em meu trabalho como instrutor, pude ter a oportunidade de ensinar
                                   sobre ferramentas de informática, como Microsoft Word, Excel,
                                   Powerpoint, Outlook e Adobe Photoshop.
                                   Além disso, lecionava sobre manutenção de computadores e notebooks,
                                   realizando manutenção preventiva e corretiva, substituição de peças e
                                   formatação. Também, sobre a configuração de equipamentos de rede e o
                                   gerenciamento de redes locais.
                                   </p>
                         </div>

                         <div className="resume-date text-md-right">
                              <span className="text-primary">Janeiro 2019 - Agosto 2021</span>
                         </div>
                    </div>
               </div>
          </section>

      <hr className="m-0" />

      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="education">
        <div className="w-100">
          <h2 className="mb-5">Educação</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Técnologo em Sistemas para Internet</h3>
              <div className="subheading mb-3 ifsp">Instituto Federal de Educação, Ciência e Tecnologia de São Paulo, Câmpus de São João da Boa Vista</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Janeiro 2020 - Dezembro 2022</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Técnico em Informática</h3>
              <div className="subheading mb-3 ifsp">Instituto Federal de Educação, Ciência e Tecnologia de São Paulo, Câmpus de São João da Boa Vista</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Janeiro 2016 - Dezembro 2019</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Javascript ES6+, Webdesign</h3>
              <div className="subheading mb-3 ifsp">Origamid</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Setembro 2020 - Junho 2021</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
        <div className="w-100">
          <h2 className="mb-5">Habilidades</h2>

          <div className="subheading mb-3">
            Back-end
          </div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
               <img alt="Spring" src="https://img.shields.io/badge/spring-6DB33F?logo=spring&logoColor=white&style=for-the-badge" />
            </li>
            <li className="list-inline-item">
               <img alt="Java" src="https://img.shields.io/badge/java-007396?logo=java&logoColor=white&style=for-the-badge" />
            </li>
            <li className="list-inline-item">
               <img alt="Spring Boot" src="https://img.shields.io/badge/spring boot-6DB33F?logo=springboot&logoColor=white&style=for-the-badge" />
            </li>
            <li className="list-inline-item">
               <img alt="Swagger" src="https://img.shields.io/badge/swagger-85eA2D?logo=swagger&logoColor=white&style=for-the-badge" />
            </li>
            <li className="list-inline-item">
               <img alt="JavaScript" src="https://img.shields.io/badge/javascript-F7DF1E?logo=javascript&logoColor=white&style=for-the-badge" />
            </li>
            <li className="list-inline-item">
               <img alt="NodeJS" src="https://img.shields.io/badge/nodejs-339933?logo=nodedotjs&logoColor=white&style=for-the-badge" />
            </li>
            <li className="list-inline-item">
               <img alt="Express" src="https://img.shields.io/badge/express-000000?logo=express&logoColor=white&style=for-the-badge" />
            </li>
            <li className="list-inline-item">
               <img alt="JUnit5" src="https://img.shields.io/badge/junit-25A162?logo=junit5&logoColor=white&style=for-the-badge" />
            </li>
          </ul>

          <div className="subheading mb-3">
            Front-end
          </div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
               <img alt="Angular" src="https://img.shields.io/badge/angular-DD0031?logo=angular&logoColor=white&style=for-the-badge" />
            </li>
            <li className="list-inline-item">
               <img alt="Bootstrap" src="https://img.shields.io/badge/bootstrap-7952B3?logo=bootstrap&logoColor=white&style=for-the-badge" />
            </li>
            <li className="list-inline-item">
               <img alt="Bulma" src="https://img.shields.io/badge/bulma-00D1B2?logo=bulma&logoColor=white&style=for-the-badge" />
            </li>
            <li className="list-inline-item">
               <img alt="CSS3" src="https://img.shields.io/badge/css3-1572B6?logo=css3&logoColor=white&style=for-the-badge" />
            </li>
            <li className="list-inline-item">
               <img alt="HTML5" src="https://img.shields.io/badge/html5-E34F26?logo=html5&logoColor=white&style=for-the-badge" />
            </li>
            <li className="list-inline-item">
               <img alt="Markdown" src="https://img.shields.io/badge/markdown-000000?logo=markdown&logoColor=white&style=for-the-badge" />
            </li>
          </ul>
          
          <div className="subheading mb-3">
            Banco de dados
          </div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
               <img alt="DynamoDB" src="https://img.shields.io/badge/dynamodb-4053D6?logo=amazondynamodb&logoColor=white&style=for-the-badge" />
            </li>
            <li className="list-inline-item">
               <img alt="Postgres" src="https://img.shields.io/badge/postgresql-4169E1?logo=postgresql&logoColor=white&style=for-the-badge" />
            </li>
            <li className="list-inline-item">
               <img alt="Sequelize" src="https://img.shields.io/badge/sequelize-52B0E7?logo=sequelize&logoColor=white&style=for-the-badge" />
            </li>
          </ul>

          <div className="subheading mb-3">
            Mensageria
          </div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
               <img alt="Kafka" src="https://img.shields.io/badge/kafka-231F20?logo=apachekafka&logoColor=white&style=for-the-badge" />
            </li>
            <li className="list-inline-item">
               <img alt="Elastic" src="https://img.shields.io/badge/elasticstack-005571?logo=elasticstack&logoColor=white&style=for-the-badge" />
            </li>
            <li className="list-inline-item">
               <img alt="Kibana" src="https://img.shields.io/badge/kibana-005571?logo=kibana&logoColor=white&style=for-the-badge" />
            </li>
            <li className="list-inline-item">
               <img alt="Twilio" src="https://img.shields.io/badge/twilio-F22F46?logo=twilio&logoColor=white&style=for-the-badge" />
            </li>
          </ul>

          <div className="subheading mb-3">
            Metodologias ágeis
          </div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
               <img alt="Atlassian" src="https://img.shields.io/badge/atlassian-0052CC?logo=atlassian&logoColor=white&style=for-the-badge" />
            </li>
            <li className="list-inline-item">
               <img alt="Confluence" src="https://img.shields.io/badge/confluence-172B4D?logo=confluence&logoColor=white&style=for-the-badge" />
            </li>
            <li className="list-inline-item">
               <img alt="Jira" src="https://img.shields.io/badge/jira-0052CC?logo=jirasoftware&logoColor=white&style=for-the-badge" />
            </li>
            <li className="list-inline-item">
               <img alt="Notion" src="https://img.shields.io/badge/notion-000000?logo=notion&logoColor=white&style=for-the-badge" />
            </li>
            <li className="list-inline-item">
               <img alt="Redmine" src="https://img.shields.io/badge/redmine-B32024?logo=redmine&logoColor=white&style=for-the-badge" />
            </li>
          </ul>
          
          <div className="subheading mb-3">
            Controladores de versionamento
          </div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
               <img alt="Bitbucket" src="https://img.shields.io/badge/bitbucket-0052CC?logo=bitbucket&logoColor=white&style=for-the-badge" />
            </li>
            <li className="list-inline-item">
               <img alt="Git" src="https://img.shields.io/badge/git-F05032?logo=git&logoColor=white&style=for-the-badge" />
            </li>
            <li className="list-inline-item">
               <img alt="Github" src="https://img.shields.io/badge/github-181717?logo=github&logoColor=white&style=for-the-badge" />
            </li>
          </ul>
        </div>
      </section>

      <hr className="m-0" />

      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="interests">
        <div className="w-100">
          <h2 className="mb-5">Interesses</h2>
          <p>
            Apart from being a web developer, I enjoy most of my time being
            outdoors. In the winter, I am an avid skier and novice ice climber.
            During the warmer months here in Colorado, I enjoy mountain biking,
            free climbing, and kayaking.
          </p>
          <p className="mb-0">
            When forced indoors, I follow a number of sci-fi and fantasy genre
            movies and television shows, I am an aspiring chef, and I spend a
            large amount of my free time exploring the latest technology
            advancements in the front-end web development world.
          </p>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="awards"
      >
        <div className="w-100">
          <h2 className="mb-5">Awards &amp; Certifications</h2>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Google Analytics Certified Developer
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Mobile Web Specialist - Google Certification
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>1<sup>st</sup>
              Place - University of Colorado Boulder - Emerging Tech Competition
              2009
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>1<sup>st</sup>
              Place - University of Colorado Boulder - Adobe Creative Jam 2008
              (UI Design Category)
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>2<sup>nd</sup>
              Place - University of Colorado Boulder - Emerging Tech Competition
              2008
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>1<sup>st</sup>
              Place - James Buchanan High School - Hackathon 2006
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>3<sup>rd</sup>
              Place - James Buchanan High School - Hackathon 2005
            </li>
          </ul>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
