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
            icon: "📊", // Icono de Gráfico
            content: `
                <p>Equilibrio entre rigor académico y flexibilidad de desarrollo.</p>
                <ul>
                    <li><strong>Fase 1 (Cascada):</strong> Ingeniería de Requerimientos y Diseño Arquitectónico (Agosto-Septiembre). Enfoque en "pensar antes de codificar".</li>
                    <li><strong>Fase 2 (Ágil):</strong> Desarrollo iterativo e incremental (Octubre-Diciembre). Adaptación a cambios mediante Sprints.</li>
                    <li><strong>Validación Continua:</strong> Feedback constante con Protección Civil para ajustar el producto a la realidad operativa.</li>
                </ul>
            `
        },
        {
            id: "evolucion",
            title: "Evolución (Sprints)",
            icon: "🔄", // Icono de ciclo/repetición
            content: `
                <p>Cronología de maduración técnica y funcional:</p>
                <ul>
                    <li><strong>Sprint 1 & 2 (Cimientos):</strong> Infraestructura Docker, Seguridad Base y cambio crítico a <em>Database First</em>.</li>
                    <li><strong>Sprint 3 (Negocio):</strong> Desarrollo del núcleo (Guardias/Asistencia). Inclusión del módulo no planeado de <em>Compensaciones</em> (Adaptabilidad).</li>
                    <li><strong>Sprint 4 (Hardening):</strong> Implementación de RBAC estricto, módulo de <em>Incidencias</em>, módulo de <em>Reportes</em>, módulo de <em>Notificaciones</em> y despliegue productivo en Railway.</li>
                </ul>
            `
        },
        {
            id: "dinamica",
            title: "Dinámica y Herramientas",
            icon: "🛠️", // Icono de herramientas
            content: `
                <p>Organización de equipo de alto rendimiento:</p>
                <ul>
                    <li><strong>Vertical Slicing:</strong> Desarrollo "Full Stack" por funcionalidad (End-to-End) para evitar bloqueos.</li>
                    <li><strong>Stack de Gestión:</strong> Trello (Kanban), GitHub (CI/CD) y Figma (Prototipado).</li>
                    <li><strong>IA Integrada:</strong> Uso de GitHub Copilot como agente de auditoría de código y documentación.</li>
                    <li><strong>Diagrams as Code:</strong> Uso de PlantUML para mantener la documentación técnica viva y versionada.</li>
                </ul>
                <div style="margin-top:30px; text-align:center;">
                    <img src="trello.png" alt="trello" style="width:180px; height:180px; border:3px solid var(--secondary-color); border-radius:10px; box-shadow:0 0 20px rgba(77, 238, 234, 0.3);">
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
                id: "backend",
                title: "Backend",
                icon: "🐍",
                content: `
                    <p>Django REST Framework con PostgreSQL</p>
                    <ul>
                        <li>API RESTful</li>
                        <li>Autenticación JWT</li>
                        <li>ORM Database First</li>
                    </ul>
                `
            },
            {
                id: "frontend",
                title: "Frontend",
                icon: "⚡",
                content: `
                    <p>SvelteKit con TypeScript</p>
                    <ul>
                        <li>SSR/SPA Híbrido</li>
                        <li>Reactivo</li>
                        <li>Optimizado</li>
                    </ul>
                `
            },
            {
                id: "infraestructura",
                title: "Infraestructura",
                icon: "🐳",
                content: `
                    <p>Docker + Railway</p>
                    <ul>
                        <li>Microservicios</li>
                        <li>CI/CD Automático</li>
                        <li>NGINX Gateway</li>
                    </ul>
                `
            }
        ]
    },
    {
        id: 7,
        title: "Inteligencia Artificial",
        icon: "🧠",
        content: `
            <p>Integración de Chatbot para consultas del Convenio Colectivo.</p>
            <ul>
                <li><strong>Motor:</strong> n8n (Orquestador de flujos).</li>
                <li><strong>Almacenamiento:</strong> MinIO (Object Storage) para los PDFs.</li>
                <li><strong>Modelo:</strong> Gemini Flash 2.5 con "Corpus Cerrado" para evitar alucinaciones.</li>
            </ul>
        `
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

