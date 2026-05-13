# Backend recomendado para Railway

## Stack sugerido

- Frontend: Next.js o React + Vite.
- Backend: Node.js con NestJS si queres estructura empresarial, o Express/Fastify si queres velocidad.
- Base de datos: PostgreSQL en Railway.
- ORM: Prisma.
- Autenticacion: Auth.js/NextAuth o Clerk.
- Deploy: Railway para backend, base de datos y variables de entorno.

## Por que PostgreSQL

Este CRM necesita relaciones reales:

- Un lead pertenece a una agente/asistente.
- Un lead puede estar vinculado a un desarrollo.
- Un desarrollo pertenece a un desarrollador.
- Un lead tiene muchas actividades.
- Un lead tiene muchos seguimientos.
- Una venta puede generar reserva, cierre y comision.

PostgreSQL maneja mejor estas relaciones que una planilla o una base NoSQL simple.

## Tablas principales

### users

- id
- name
- email
- role: admin, agente, asistente
- created_at

### leads

- id
- name
- source: WhatsApp, Facebook, Instagram, X, Recomendaciones, Otros
- stage: Nuevo, Calificado, Visita, Reserva, Cierre
- priority: Alta, Media, Baja
- status: Activo, Venta cerrada, Venta cancelada
- need
- zone
- budget
- timeframe
- country
- client_type
- development_id
- owner_id
- notes
- created_at
- updated_at

### lead_activities

- id
- lead_id
- user_id
- type: WhatsApp, Llamada, Reunion, Email, Visita
- summary
- created_at

### followups

- id
- lead_id
- user_id
- scheduled_at
- status: Pendiente, Hecho, Vencido, Cancelado
- notes

### developments

- id
- name
- developer_id
- zone
- status
- price_from
- price_to
- inventory
- commission_percent
- delivery_month
- notes
- created_at

### developers

- id
- name
- contact_name
- phone
- email
- notes

### deals

- id
- lead_id
- development_id
- amount
- commission_percent
- estimated_commission
- paid_commission
- status: Reserva, Cerrada, Cancelada
- closed_at

## API minima

- `GET /leads`
- `GET /leads?page=1&pageSize=20&source=WhatsApp&stage=Reserva&zone=Villa%20Morra`
- `POST /leads`
- `PATCH /leads/:id`
- `POST /leads/:id/activities`
- `POST /leads/:id/followups`
- `GET /developments`
- `POST /developments`
- `PATCH /developments/:id`
- `GET /dashboard/summary`

## Paginacion backend

Los listados deben paginarse desde backend, no cargarse completos en el navegador.

Ejemplo de respuesta:

```json
{
  "data": [],
  "pagination": {
    "page": 1,
    "pageSize": 20,
    "total": 126,
    "totalPages": 7
  }
}
```

Con Prisma:

```ts
const [data, total] = await Promise.all([
  prisma.lead.findMany({
    where,
    skip: (page - 1) * pageSize,
    take: pageSize,
    orderBy: { updatedAt: "desc" }
  }),
  prisma.lead.count({ where })
]);
```

## Railway

1. Crear proyecto en Railway.
2. Agregar PostgreSQL.
3. Crear servicio backend.
4. Configurar `DATABASE_URL`.
5. Ejecutar migraciones Prisma.
6. Desplegar frontend.
7. Proteger la app con login.

## Siguiente evolucion natural

Convertir este prototipo HTML/CSS/JS a:

- Next.js para frontend y rutas.
- Prisma para modelos.
- PostgreSQL para datos reales.
- Login por agente/asistente.
- Calendario con vencimientos.
- Importacion inicial desde CSV/Excel, pero no como canal de captacion.
