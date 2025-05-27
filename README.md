# BAULITO - Marketplace de Segunda Mano

**BAULITO** es un sistema de eCommerce donde los usuarios pueden comprar y vender productos usados como ropa, accesorios y artículos diversos. Es como una venta de garaje en línea, pero organizada, segura y digital.

## 🌐 Demo
[https://reactjs-ecommerce-app.vercel.app/](https://reactjs-ecommerce-app.vercel.app/)

## 🚀 Características

- Compra y venta de productos de segunda mano
- Registro y autenticación de usuarios
- Panel para vendedores: publicar, editar y eliminar productos
- Carrito de compras con lógica de checkout
- Interfaz responsiva adaptable a todos los dispositivos
- Backend robusto con API RESTful
- Arquitectura escalable con contenedores

## 🧰 Tecnologías Utilizadas

- **Frontend:** React.js + Redux + Bootstrap
- **Backend:** Django REST Framework
- **Base de Datos:** MySQL
- **Infraestructura:** Docker + Nginx + AWS/Azure
- **APIs:** Fake Store API (en entorno demo)

## 📁 Estructura del Proyecto

baulito-marketplace/
├── frontend/ # Aplicación React.js
├── backend/ # API REST en Django
├── database/ # Scripts SQL
├── docs/ # Documentación técnica
├── diagrams/ # Diagramas UML y arquitectura
└── README.md

bash
Copiar
Editar

## ⚙️ Instalación Local

1. Clona el repositorio:
   ```bash
   git clone https://github.com/jmartinezchavz/baulito-marketplace.git
   cd baulito-marketplace
Instala dependencias del frontend:

bash
Copiar
Editar
cd frontend
npm install
npm start
Instala dependencias del backend:

bash
Copiar
Editar
cd ../backend
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
📌 Asegúrate de tener configurado tu entorno virtual de Python y la base de datos MySQL en ejecución.

🐳 Docker (opcional)
Puedes ejecutar todo el sistema con Docker:

bash
Copiar
Editar
docker-compose up --build


🙋‍♂️ Contribuciones
¡Las contribuciones son bienvenidas!
Solo abre un issue o pull request y conversamos los cambios.

💬 Feedback
¿Tienes ideas o sugerencias para mejorar BAULITO?
Contáctame por GitHub o crea un issue.

Apoyo en el GIT https://ssahibsingh.github.io

© 2025 - Proyecto académico y práctico desarrollado por Juan Andrés Martínez




