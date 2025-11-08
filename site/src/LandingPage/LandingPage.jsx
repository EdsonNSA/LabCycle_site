import React, { useEffect } from 'react';
import './LandingPage.css';
import logo from '../logo-page.jpg';
import characterImage from '../cyla.jfif';

import { 
    MessageSquare, 
    Instagram, 
    Mail, 
    X, 
    Check, 
    ShieldAlert, 
    List, 
    Trash2, 
    Clock, 
    BarChart, 
    Package, 
    Gamepad2, 
    BrainCircuit, 
    Award, 
    BellRing 
} from 'lucide-react'; 

const LandingPage = () => {

    useEffect(() => {
        const anchors = document.querySelectorAll('a[href^="#"]');
        
        const handleClick = (e) => {
            e.preventDefault();
            const targetId = e.currentTarget.getAttribute('href'); 
            if (targetId) {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        };

        anchors.forEach(anchor => {
            anchor.addEventListener('click', handleClick);
        });

        return () => {
            anchors.forEach(anchor => {
                anchor.removeEventListener('click', handleClick);
            });
        };
    }, []); 

    return (
        <div className="lp-body-wrapper">
            <header className="lp-header">
                <div className="lp-container">
                    <a href="#hero" className="lp-logo-text-link">
                        LabCycle
                    </a>
                    <nav className="lp-nav">
                        <ul>
                            <li><a href="#problema">Problema</a></li>
                            <li><a href="#solucao">Solução</a></li>
                            <li><a href="#como-funciona">Como Funciona</a></li>
                            <li><a href="#recursos">Recursos</a></li>
                            <li><a href="#contato">Contato</a></li>
                        </ul>
                    </nav>
                </div>
            </header>

            <section id="hero" className="lp-section">
                <div className="lp-container">
                    <img src={logo} alt="LabCycle Logo" className="lp-hero-logo" />
                    <h1>Laboratórios Inteligentes,<br />Futuro Sustentável.</h1>
                    <p>A plataforma completa para gerenciar reagentes, agendar práticas e automatizar o descarte de resíduos no seu laboratório.</p>
                    <a href="https://labcycle.netlify.app/" className="lp-btn lp-btn-primary">Acessar Plataforma</a>
                    <a href="#problema" className="lp-btn lp-btn-secondary">Saiba Mais</a>
                </div>
            </section>

            <section id="problema" className="lp-section">
                <div className="lp-container">
                    <div className="lp-problem-intro">
                        <img 
                            src={characterImage} 
                            alt="Personagem indicando problema" 
                            className="lp-character-image" 
                        />
                        <h2>A gestão do seu laboratório ainda é feita em planilhas?</h2>
                    </div>

                    <p className="lp-problem-description">
                        Sabemos que o dia a dia de um laboratório pode ser caótico: reagentes que vencem sem aviso, agendamentos conflitantes, e a constante preocupação com o descarte correto de resíduos. Isso não só gera prejuízo, mas coloca a segurança em risco.
                    </p>
                    
                    <div className="lp-grid-3-col">
                        <div className="lp-card">
                            <span className="lp-icon"><X size={48} /></span>
                            <h3>Perda de Reagentes</h3>
                            <p>Reagentes vencidos ou extraviados geram custos desnecessários e impactam o orçamento.</p>
                        </div>
                        <div className="lp-card">
                            <span className="lp-icon"><Clock size={48} /></span>
                            <h3>Conflitos de Agendamento</h3>
                            <p>Dificuldade em organizar o uso do laboratório e a disponibilidade de materiais para as práticas.</p>
                        </div>
                        <div className="lp-card">
                            <span className="lp-icon"><ShieldAlert size={48} /></span>
                            <h3>Riscos de Segurança</h3>
                            <p>Descarte incorreto de resíduos e falta de conhecimento sobre o manuseio seguro de substâncias.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="solucao" className="lp-section lp-section-dark">
                <div className="lp-container">
                    <h2>O Fim da Burocracia no Laboratório.</h2>
                    <p>O LabCycle centraliza tudo o que você precisa em um só lugar. Nossa visão é trazer eficiência, segurança e sustentabilidade para a rotina acadêmica e de pesquisa.</p>
                    <div className="lp-grid-3-col">
                        <div className="lp-card">
                            <span className="lp-icon"><Check size={48} /></span>
                            <h3>Gestão Eficiente</h3>
                            <p>Controle de inventário em tempo real, alertas de vencimento e organização de materiais para cada prática.</p>
                        </div>
                        <div className="lp-card">
                            <span className="lp-icon"><ShieldAlert size={48} /></span>
                            <h3>Segurança Total</h3>
                            <p>Consultas rápidas de FISPQ, guias de descarte e quizzes de segurança para fixar o conhecimento.</p>
                        </div>
                        <div className="lp-card">
                            <span className="lp-icon"><Trash2 size={48} /></span>
                            <h3>Sustentabilidade Real</h3>
                            <p>Otimize o uso de recursos e garanta que cada resíduo seja tratado e descartado corretamente.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="como-funciona" className="lp-section">
                <div className="lp-container">
                    <h2>Tudo em Poucos Cliques.</h2>
                    <p>Entenda como o LabCycle transforma a gestão do seu laboratório em 4 passos simples e intuitivos.</p>
                    <div className="lp-grid-4-col">
                        <div className="lp-card lp-card-step">
                            <span className="lp-step-number">01</span>
                            <span className="lp-icon"><Package size={48} /></span>
                            <h3>Gerencie seu Inventário</h3>
                            <p>Cadastre reagentes e materiais, acompanhe validades e organize o estoque com facilidade.</p>
                        </div>
                        <div className="lp-card lp-card-step">
                            <span className="lp-step-number">02</span>
                            <span className="lp-icon"><Clock size={48} /></span>
                            <h3>Agende suas Práticas</h3>
                            <p>Professores organizam turmas e o sistema prepara automaticamente a lista de materiais necessários.</p>
                        </div>
                        <div className="lp-card lp-card-step">
                            <span className="lp-step-number">03</span>
                            <span className="lp-icon"><Gamepad2 size={48} /></span>
                            <h3>Aprenda com Gamificação</h3>
                            <p>Alunos testam seus conhecimentos em segurança e descarte com quizzes interativos após as práticas.</p>
                        </div>
                        <div className="lp-card lp-card-step">
                            <span className="lp-step-number">04</span>
                            <span className="lp-icon"><Trash2 size={48} /></span>
                            <h3>Descarte Consciente</h3>
                            <p>Receba orientações claras para o descarte de cada tipo de resíduo, garantindo a conformidade.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="recursos" className="lp-section lp-section-dark">
                <div className="lp-container">
                    <h2>Uma Plataforma, Múltiplas Soluções.</h2>
                    <p>Conheça os principais recursos que fazem do LabCycle a ferramenta essencial para o seu laboratório.</p>
                    <div className="lp-grid-4-col">
                        <div className="lp-card">
                            <span className="lp-icon"><BrainCircuit size={48} /></span>
                            <h3>Em Breve: Assistente IA Integrado</h3>
                            <p>Tire dúvidas sobre reagentes, procedimentos e segurança 24/7 com nosso assistente virtual.</p>
                        </div>
                        <div className="lp-card">
                            <span className="lp-icon"><Award size={48} /></span>
                            <h3>Sistema de Gamificação</h3>
                            <p>Engaje alunos com quizzes, pontos, conquistas e um leaderboard competitivo.</p>
                        </div>
                        <div className="lp-card">
                            <span className="lp-icon"><BarChart size={48} /></span>
                            <h3>Relatórios e Métricas</h3>
                            <p>Acompanhe o uso de materiais, vencimentos e histórico de descarte com dados precisos.</p>
                        </div>
                        <div className="lp-card">
                            <span className="lp-icon"><BellRing size={48} /></span>
                            <h3>Alertas Inteligentes</h3>
                            <p>Receba notificações sobre reagentes próximos do vencimento ou necessidades de reposição.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="contato" className="lp-section">
                <div className="lp-container">
                    <h2>Pronto para revolucionar seu laboratório?</h2>
                    <p>Entre em contato para uma demonstração personalizada ou acesse nossa plataforma para testar agora mesmo.</p>
                    <a href="https://forms.gle/WgyzqHFRudRB5QrA9" className="lp-btn lp-btn-primary">Formulário de Feedback</a>
                    <a href="https://labcycle.netlify.app/" className="lp-btn lp-btn-secondary">Testar Agora</a>
                    
                    <div className="lp-social-links">
                        <a href="https://w.app/jb7cpm" target="_blank" rel="noopener noreferrer" title="WhatsApp">
                            <MessageSquare size={36} />
                            <span>⮞ WhatsApp</span> 
                        </a> 
                        <a href="https://www.instagram.com/lab.cycle?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" title="Instagram">
                            <Instagram size={36} />
                            <span>⮞ Instagram</span>
                        </a> 
                        <a href="mailto:labcyclesolucoessustentaveis@gmail.com?subject=Contato" target="_blank" rel="noopener noreferrer" title="E-mail">
                            <Mail size={36} />
                            <span>⮞ E-mail</span>
                        </a> 
                    </div>
                </div>
            </section>

            <footer className="lp-footer">
                <div className="lp-container">
                    <div className="lp-footer-nav">
                        <ul>
                            <li><a href="#problema">Problema</a></li>
                            <li><a href="#solucao">Solução</a></li>
                            <li><a href="#como-funciona">Como Funciona</a></li>
                            <li><a href="#recursos">Recursos</a></li>
                            <li><a href="#contato">Contato</a></li>
                        </ul>
                    </div>
                    <p>&copy; 2025 LabCycle. Todos os direitos reservados.</p>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;