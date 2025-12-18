#### D. La Barrera Técnica: Docker y la Comunicación entre Contenedores

Finalmente, enfrentamos un desafío puramente técnico que también reflejaba problemas de comunicación (entre servicios). La implementación de **Docker** y la orquestación de microservicios fue compleja. Nos costó encontrar la configuración correcta para que los contenedores (Frontend, Backend, BD, N8N) se "hablaran" entre sí dentro de la red interna sin exponerse innecesariamente.

* **Superación:** Tuvimos que reestructurar la configuración de `docker-compose` para pasar de un entorno monolítico a uno de servicios aislados con volúmenes persistentes, aprendiendo en el proceso sobre redes virtuales y gateways (Nginx).