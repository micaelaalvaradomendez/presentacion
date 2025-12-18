// ================= CONFIGURACIÓN DE CONTENIDO =================
// Este archivo contiene SOLO los datos de la presentación
// Para agregar/eliminar slides, solo modifica este archivo

const slides = [
    {
        id: 4,
        title: "Metodología",
        icon: "📋",
        tabs: [
            {
                id: "estrategia",
                title: "Estrategia Híbrida",
                icon: "📊",
                content: `
                    <p><strong>Enfoque de trabajo:</strong> "Vertical Slicing" con modalidad Full-Stack.</p>
                    <ul>
                        <li><strong>Corte Vertical:</strong> Cada integrante implementa funcionalidades completas (DB → backend → frontend), evitando dependencias rígidas entre capas.</li>
                        <li><strong>Colaboración y mentoría:</strong> Revisiones de código y soporte interno para nivelar habilidades del equipo y compartir conocimientos técnicos (DB, Docker, seguridad, etc.).</li>
                        <li><strong>Autonomía:</strong> Se reducen cuellos de botella: los desarrolladores avanzan de forma independiente dominando el flujo completo de la funcionalidad.</li>
                    </ul>
                `
            },
            {
                id: "evolucion",
                title: "Evolución (Sprints)",
                icon: "🔄",
                content: `
                    <p><strong>Fases y cronología:</strong></p>
                    <ul>
                        <li><strong>Ingeniería de Requerimientos (Agosto-Septiembre):</strong> Relevamiento con el cliente y definición de casos de uso.</li>
                        <li><strong>Diseño de Arquitectura y Datos:</strong> Infraestructura en Docker y estrategia <em>Database First</em> para asegurar integridad del modelo.</li>
                        <li><strong>Desarrollo por Sprints:</strong>
                            <ul>
                                <li><strong>Sprint 1:</strong> Cimientos (Docker, autenticación/login).</li>
                                <li><strong>Sprint 2:</strong> Núcleo administrativo (ABM de agentes y áreas) e integración inicial con IA.</li>
                                <li><strong>Sprint 3:</strong> Lógica de negocio (Guardias, Asistencia) y módulo de Compensaciones.</li>
                                <li><strong>Sprint 4:</strong> Estabilización, módulo de Incidencias y hardening (RBAC).</li>
                            </ul>
                        </li>
                        <li><strong>Testeo y despliegue:</strong> Pruebas de integración y despliegue en Railway.</li>
                    </ul>
                `
            },
            {
                id: "dinamica",
                title: "Dinámica y Herramientas",
                icon: "🛠️",
                content: `
                    <p>Gestión del proyecto y herramientas utilizadas:</p>
                    <ul>
                        <li><strong>Validación con el cliente:</strong> Decisiones funcionales validadas para evitar retrabajo.</li>
                        <li><strong>Documentación asistida por IA:</strong> Uso de GitHub Copilot para generar resúmenes de sprint y documentación técnica.</li>
                        <li><strong>Gestión Kanban:</strong> Tablero Trello para seguimiento de tareas (Pendiente / En Progreso / Terminado).</li>
                        <li><strong>Comunicación rápida:</strong> Canal operativo en WhatsApp para decisiones inmediatas durante la codificación.</li>
                    </ul>
                    <div style="margin-top:20px; text-align:center;">
                        <img src="trello.png" alt="trello kanban" style="width:180px; height:auto; max-width:80%; border:3px solid var(--secondary-color); border-radius:10px; box-shadow:0 0 20px rgba(77, 238, 234, 0.3);">
                    </div>
                `
            }
        ]
},
    {
        id: 6,
        title: "Tecnología",
        icon: "💻",
        tabs: [
            {
                id: "stack",
                title: "Stack Tecnológico",
                icon: "🔧",
                content: `
                    <p><strong>Arquitectura de microservicios para escalabilidad y mantenibilidad:</strong></p>
                    <ul>
                        <li><strong>Infraestructura:</strong> Docker + Docker Compose (contenerización multiplataforma), Nginx como Gateway y Reverse Proxy (SSL, enrutamiento, CORS).</li>
                        <li><strong>Backend:</strong> Python + Django REST Framework (API RESTful, autenticación, reglas de negocio), PostgreSQL 16 Alpine (Database First para integridad referencial).</li>
                        <li><strong>Frontend:</strong> SvelteKit + Vite (sin Virtual DOM, menor bundle size, optimizado para móviles de gama media).</li>
                        <li><strong>Servicios auxiliares:</strong> MinIO (S3-compatible para PDFs), N8N (orquestación low-code de flujos e IA), Google Gemini API (procesamiento de consultas del Convenio Colectivo).</li>
                        <li><strong>Producción:</strong> Railway (PaaS con soporte Docker Compose y volúmenes persistentes).</li>
                    </ul>
                `
            },
            {
                id: "desafio",
                title: "Desafío de Aprendizaje",
                icon: "🎯",
                content: `
                    <p><strong>Decisión de arquitectura como aprendizaje intencional:</strong></p>
                    <ul>
                        <li>Aunque el proyecto permitía un <strong>monolito tradicional</strong>, elegimos <strong>microservicios contenerizados</strong> como desafío personal y educativo.</li>
                        <li>Objetivo: dominar estándares de la industria moderna (Docker, orquestación, redes internas, variables de entorno).</li>
                        <li>Beneficios: desarrollo de habilidades Full Stack, entorno portable y agnóstico (funciona idénticamente en cualquier OS: Windows/Linux/MacOS).</li>
                        <li>Resultado: comprensión profunda de cómo interactúan componentes distribuidos, preparación para entornos productivos complejos.</li>
                    </ul>
                `
            },
            {
                id: "despliegue",
                title: "Despliegue en Nube",
                icon: "☁️",
                content: `
                    <p><strong>Flujo de conexión Docker (desarrollo):</strong></p>
                    <ul>
                        <li><strong>Red privada:</strong> <code>giga-network</code> aisla servicios del exterior.</li>
                        <li><strong>Gateway único:</strong> Todo el tráfico entra por puerto 80 (Nginx), que enruta a Frontend (puerto 3000), Backend (8000) y N8N según la ruta.</li>
                        <li><strong>Comunicación interna:</strong> Contenedores usan DNS de Docker (ej. <code>postgres:5432</code>, <code>minio:9000</code>) sin exposición pública.</li>
                    </ul>
                    <p><strong>Selección de plataforma productiva:</strong></p>
                    <ul>
                        <li><strong>Oracle Cloud:</strong> Descartado (alta complejidad de configuración VM).</li>
                        <li><strong>Render:</strong> Descartado (sin volúmenes persistentes → pérdida de configuraciones N8N/MinIO).</li>
                        <li><strong>Railway (elegido):</strong> Soporte nativo Docker Compose, volúmenes persistentes, migración transparente (un solo comando), gestión de variables de entorno y logs en tiempo real.</li>
                    </ul>
                `
            }
        ]
    },
    {
        id: 7,
        title: "Inteligencia Artificial",
        icon: "🧠",
        tabs: [
            {
                id: "arquitectura",
                title: "Arquitectura RAG",
                icon: "🔄",
                content: `
                    <p><strong>Flujo de integración con IA (módulo Convenio):</strong></p>
                    <ul>
                        <li><strong>1. Solicitud:</strong> Usuario consulta en lenguaje natural desde SvelteKit → Nginx Gateway.</li>
                        <li><strong>2. Orquestación (n8n):</strong> Nginx deriva tráfico a n8n vía Webhook, iniciando un workflow automatizado.</li>
                        <li><strong>3. Recuperación de Contexto (RAG):</strong> n8n conecta a MinIO (S3-compatible), descarga PDF del Convenio Colectivo y extrae texto plano.</li>
                        <li><strong>4. Generación (Gemini):</strong> n8n construye prompt enriquecido (pregunta + texto PDF) y lo envía a Google Gemini con instrucciones de Grounding (responder solo según el documento).</li>
                        <li><strong>5. Entrega:</strong> Respuesta formateada en JSON vuelve al Frontend en tiempo real.</li>
                    </ul>
                    <p><strong>Beneficios:</strong> Desacople entre lógica de negocio e IA, cambio de documento sin tocar código.</p>
                `
            },
            {
                id: "optimizacion",
                title: "Optimización con IA",
                icon: "⚡",
                content: `
                    <p><strong>GitHub Copilot como auditor de calidad (Sprint 4):</strong></p>
                    <ul>
                        <li><strong>Análisis estático:</strong> Detección de antipatrones que degradaban rendimiento.</li>
                        <li><strong>Caso 1 (Layout Thrashing):</strong> Evento <code>mousemove</code> en panel admin forzaba recálculo de posición de todas las tarjetas en cada píxel → Solución: <code>requestAnimationFrame</code> limitando cálculos al elemento activo.</li>
                        <li><strong>Caso 2 (Peticiones redundantes):</strong> Menú principal ejecutaba <code>checkSession</code> en cada navegación → Solución: lógica de bandera + memoización CSS, reduciendo carga CPU en móviles.</li>
                    </ul>
                    <p><strong>Resultado:</strong> Mejora significativa de rendimiento en dispositivos de gama media.</p>
                `
            },
            {
                id: "seguridad",
                title: "Aprendizaje vs Seguridad",
                icon: "🔒",
                content: `
                    <p><strong>Decisión estratégica a futuro:</strong></p>
                    <ul>
                        <li><strong>Valor pedagógico:</strong> n8n permitió aprender orquestación de workflows y servicios, habilidad demandada en la industria.</li>
                        <li><strong>Riesgo identificado:</strong> Inyección de prompts indirecta / Stored XSS (OWASP Top 10 for LLMs) — atacante podría "envenenar" contexto para manipular al LLM y generar código JavaScript malicioso.</li>
                        <li><strong>Complejidad:</strong> Sanitización perfecta de respuestas generativas es extremadamente difícil de garantizar.</li>
                        <li><strong>Conclusión:</strong> Se priorizó seguridad e integridad de datos financieros sobre innovación del chatbot en producción crítica → refactorización o eliminación a futuro.</li>
                    </ul>
                `
            }
        ]
    },
    {
        id: 8,
        title: "Desafíos",
        icon: "🔥",
        content: `
            <p>Problemas críticos resueltos durante el desarrollo:</p>
            <ul>
                <li><strong>Infraestructura:</strong> Render no permitía persistencia de archivos (n8n se borraba). Migramos a <strong>Railway</strong>.</li>
                <li><strong>Seguridad:</strong> Detección de fraude (Marcación por otros). Implementamos validación cruzada de sesión e IP.</li>
                <li><strong>CORS:</strong> Problemas de cookies entre Front y Back en dominios distintos.</li>
            </ul>
        `
    },
    {
        id: 9,
        title: "Aprendizajes",
        icon: "🎓",
        content: `
            <ul>
                <li>Gestión de deuda técnica y refactorización.</li>
                <li>Despliegue real en nube (CI/CD).</li>
                <li>Importancia de "Database First" en sistemas complejos.</li>
                <li>Seguridad ofensiva y defensiva (RBAC).</li>
            </ul>
        `
    },
    {
        id: 10,
        title: "Sistema Final",
        icon: "🚀",
        tabs: [
            {
                id: "acceso-web",
                title: "Acceso Web",
                icon: "🌐",
                content: `
                    <p style="text-align:center; font-size:1.3rem; margin-bottom:30px;">El sistema está operativo y en producción.</p>
                    
                    <div style="display:flex; justify-content:center; align-items:center; gap:50px; margin-top:30px;">
                        <!-- QR Code -->
                        <div style="text-align:center;">
                            <h3 style="color:var(--secondary-color); margin-bottom:15px;">Acceso Web</h3>
                            <img src="qr-pag.png" alt="QR Code GIGA" style="width:200px; height:200px; border:3px solid var(--accent-color); border-radius:10px; box-shadow:0 0 20px rgba(255,42,109,0.3);">
                            <p style="margin-top:10px; font-size:1.1rem; color:#05d9e8;">giga-untdf.up.railway.app</p>
                        </div>
                        
                        <!-- Credenciales de Acceso -->
                        <div style="background:rgba(255,255,255,0.05); padding:30px; border-radius:15px; border:1px solid rgba(5,217,232,0.3); min-width:350px;">
                            <h3 style="color:var(--accent-color); margin-bottom:20px; text-align:center;">Credenciales de Prueba</h3>
                            
                            <div style="margin-bottom:20px; padding:15px; background:rgba(0,0,0,0.3); border-radius:8px;">
                                <p style="font-size:0.9rem; color:#888; margin-bottom:5px;">Usuario 1:</p>
                                <p style="font-family:monospace; font-size:1.1rem;"><strong>CUIL:</strong> 20-12345678-9</p>
                                <p style="font-family:monospace; font-size:1.1rem;"><strong>Contraseña:</strong> demo123</p>
                            </div>
                            
                            <div style="padding:15px; background:rgba(0,0,0,0.3); border-radius:8px;">
                                <p style="font-size:0.9rem; color:#888; margin-bottom:5px;">Usuario 2:</p>
                                <p style="font-family:monospace; font-size:1.1rem;"><strong>CUIL:</strong> 27-98765432-1</p>
                                <p style="font-family:monospace; font-size:1.1rem;"><strong>Contraseña:</strong> demo456</p>
                            </div>
                        </div>
                    </div>
                `
            },
            {
                id: "presentacion",
                title: "Presentación",
                icon: "📊",
                content: `
                    <div style="display:flex; flex-direction:column; align-items:center; gap:20px;">
                        <h3 style="color:var(--secondary-color);">Equipo de Desarrollo</h3>
                        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:15px; text-align:left; font-size:1.1rem;">
                            <div>• Aguila Cárcamo Tayra Belén</div>
                            <div>• Alvarado Mendez Micaela</div>
                            <div>• Criniti Teresa</div>
                            <div>• Frers Pamela</div>
                            <div>• García Cristian</div>
                            <div>• Gomez Antonaz Leandro</div>
                        </div>
                        
                        <div style="margin-top:30px; text-align:center;">
                            <h3 style="color:var(--accent-color); margin-bottom:15px;">Acceder a la Presentación</h3>
                            <img src="qr-prest.png" alt="QR Presentación" style="width:180px; height:180px; border:3px solid var(--secondary-color); border-radius:10px; box-shadow:0 0 20px rgba(77, 238, 234, 0.3);">
                        </div>
                    </div>
                `
            }
        ]
    },
    {
        id: 11,
        title: "Escalabilidad",
        icon: "🌍",
        content: `
            <p>GIGA trasciende a Protección Civil. Su arquitectura abstracta permite gestión de turnos en:</p>
            <ul>
                <li><strong>Salud:</strong> Guardias médicas y cronogramas hospitalarios.</li>
                <li><strong>Industria:</strong> Turnos rotativos en fábricas 24/7.</li>
                <li><strong>Seguridad:</strong> Despliegue territorial (Policía/Bomberos).</li>
            </ul>
        `
    },
    {
        id: 12,
        title: "Futuro",
        icon: "🔮",
        content: `
            <p>Roadmap de evolución tecnológica (GIGA 2.0):</p>
            <ul>
                <li><strong>Biometría Real (WebAuthn):</strong> Uso de huella/rostro del celular para validar identidad física.</li>
                <li><strong>Geofencing:</strong> Validación de ubicación GPS para guardias de campo.</li>
                <li><strong>Modo Offline (PWA):</strong> Operatividad sin conexión para zonas de emergencia.</li>
            </ul>
        `
    }
];

const heroData = {
    title: "GIGA SYSTEM",
    subtitle: "Gestión Integral de Guardias y Asistencia",
    tabs: [
        {
            id: "importancia",
            title: "Importancia",
            icon: "🚨",
            content: `
                <p>La Secretaría de Protección Civil opera en un entorno crítico donde la precisión administrativa es vital.</p>
                <ul>
                    <li><strong>El Problema:</strong> Gestión manual, planillas de papel y Excel con macros (VBA) obsoletas.</li>
                    <li><strong>El Riesgo:</strong> Errores en cálculos de sueldos (Plus), falta de transparencia y dependencia física.</li>
                    <li><strong>La Misión:</strong> Modernizar, centralizar y asegurar la información.</li>
                </ul>
            `
        },
        {
            id: "sistemas-viejos",
            title: "Sistemas Viejos",
            icon: "💾",
            content: `
                <p>Analizamos la situación actual encontrando:</p>
                <ul>
                    <li>Dependencia de una herramienta interna en Excel con VBA.</li>
                    <li>Instalación manual equipo por equipo (Sin sincronización).</li>
                    <li>Incompatibilidad de arquitecturas (x86 vs x64).</li>
                    <li>Errores humanos recurrentes en la carga de horas.</li>
                </ul>
                <div style="display:flex; justify-content:center; gap:20px; margin-top:20px; flex-wrap:wrap;">
                    <figure style="margin:0; text-align:center;">
                        <img src="actuial1.jpeg" alt="Captura sistema actual 1" style="width:220px; height:auto; border-radius:8px; border:2px solid rgba(255,255,255,0.06);">
                    </figure>
                    <figure style="margin:0; text-align:center;">
                        <img src="actuial2.jpeg" alt="Captura sistema actual 2" style="width:220px; height:auto; border-radius:8px; border:2px solid rgba(255,255,255,0.06);">
                    </figure>
                    <figure style="margin:0; text-align:center;">
                        <img src="actuial3.jpeg" alt="Captura sistema actual 3" style="width:220px; height:auto; border-radius:8px; border:2px solid rgba(255,255,255,0.06);">
                    </figure>
                </div>
            `
        },
        {
            id: "solucion",
            title: "La Solución",
            icon: "🌐",
            content: `
                <p>Transformación de procesos manuales a un flujo de datos auditable:</p>
                <ul>
                    <li><strong>1. Integridad Financiera:</strong> Automatización del cálculo de Plus (40%/20%) según reglas de negocio.</li>
                    <li><strong>2. Anti-Fraude:</strong> Verificación cruzada de identidad (DNI + IP + Sesión) en tiempo real.</li>
                    <li><strong>3. Cadena de Mando:</strong> Workflow de aprobación estricto (Planificación vs. Validación).</li>
                    <li><strong>4. Realidad Operativa:</strong> Gestión digital de Compensaciones (Horas Extra) e Incidencias.</li>
                    <li><strong>5. Democratización:</strong> Dashboard 24/7 para el agente (Autogestión).</li>
                </ul>
            `
        }
    ]
};

