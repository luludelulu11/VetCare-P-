export const demoUser = {
  id: "demo-admin",
  username: "demo@vetcare.com",
  role: "ADMIN",
};

export const demoClientes = [
  {
    id: "1",
    nombre: "Lucero Fernández",
    cedula: "00112345678",
    telefono: "8095551234",
    correo: "lucero@email.com",
    direccion: "Santo Domingo",
    estado: "activo",
  },
];

export const demoMascotas = [
  {
    id: "m1",
    clienteId: "1",
    name: "Loki",
    nombre: "Loki",
    breed: "Pastor Alemán",
    raza: "Pastor Alemán",
    age_years: 3,
    edad: 3,
    first_name: "Adrian",
    last_name: "Salazar",
    clienteNombre: "Adrian Salazar",
    consultasTotal: 3,
    ultimaConsulta: "2026-04-13",
  },

  {
    id: "m1",
    name: "Cian",
    nombre: "Cian",
    breed: "Mestiza",
    raza: "Gato",
    age_years: 3,
    edad: 3,
    first_name: "Lucero",
    last_name: "Fernandez",
    clienteNombre: "Lucero Fernandez",
    consultasTotal: 3,
    ultimaConsulta: "2026-04-13",
  },
];



export const demoRegistro = {
  clientes: [
    {
      id: "1",
      nombre: "Adrian Salazar",
      cedula: "1525358522",
      direccion: "Santo Domingo",
      correo: "adrian@email.com",
      telefono: "8585685258",
      telefono2: "",
      estado: "activo",
    },
    {
      id: "2",
      nombre: "Adriana Hernández",
      cedula: "4525852885",
      direccion: "Santiago",
      correo: "adriana@email.com",
      telefono: "5253310568",
      telefono2: "",
      estado: "activo",
    },
  ],
  mascotas: [
    {
      id: "m1",
      clienteId: "1",
      nombre: "Loki",
      edad: 3,
      raza: "Pastor Alemán",
      sexo: "MALE",
      peso: 28,
      observaciones: "Paciente saludable",
      estado: "activo",
    },
    {
      id: "m2",
      clienteId: "2",
      nombre: "Sachi",
      edad: 2,
      raza: "Mestiza",
      sexo: "FEMALE",
      peso: 12,
      observaciones: "Vacunas al día",
      estado: "activo",
    },
  ],
};

export const demoStats = [
  { label: "Clientes", value: "24", accent: "#2a9d8f" },
  { label: "Mascotas", value: "37", accent: "#e76f51" },
  { label: "Consultas", value: "18", accent: "#457b9d" },
  { label: "Alertas", value: "4", accent: "#8e44ad" },
];


export const demoConsultaDetalle = {
  id: "c1",
  doctor_id: "d1",
  pet_id: "m1",
  client_id: "1",

  visit_at: "2026-04-13T10:30:00",
  reason: "Chequeo general y vacunación anual",
  diagnosis:
    "Paciente clínicamente estable. No se observan signos de enfermedad activa.",
  notes:
    "Buena condición corporal. Se recomienda mantener control antiparasitario y volver en 6 meses.",

  estado: "abierta",
  gravedad: "moderada",
  proxima_cita: "2026-10-13T09:00:00",
  motivo_seguimiento: "Control preventivo semestral",

  doctor: "Dr. Juan Pérez",

  tipos_consulta: ["general", "vacuna"],
  tipos_consulta_detalle: [
    { id: "t1", codigo: "general", nombre: "Consulta general" },
    { id: "t2", codigo: "vacuna", nombre: "Vacunación" },
  ],

  treatment: "Simparica, Vacuna múltiple anual",

  medicaciones: [
    {
      medicamento: "Simparica",
      indicaciones: "1 tableta vía oral, repetir mensualmente.",
    },
  ],

  analisis: [
    {
      analisis: "Hemograma",
      resultado_observacion: "Valores dentro de rango normal.",
    },
  ],

  vacunas: [
    {
      vacuna: "Vacuna múltiple anual",
      lote_observaciones: "Lote VAC-2026-001",
    },
  ],

  adjuntos: [],
};

export const demoHistorialMascota = [
  {
    id: "c1",
    visit_at: "2026-04-13T10:30:00",
    reason: "Chequeo general y vacunación anual",
    doctor: "Dr. Juan Pérez",
    tipos_consulta: ["gen", "vac"],
    tipos_consulta_detalle: [
      { codigo: "gen", nombre: "Examen general" },
      { codigo: "vac", nombre: "Vacuna" },
    ],
  },
  {
    id: "c2",
    visit_at: "2026-03-02T09:15:00",
    reason: "Control rutinario",
    doctor: "Dra. María López",
    tipos_consulta: ["rou"],
    tipos_consulta_detalle: [
      { codigo: "rou", nombre: "Control rutinario" },
    ],
  },
];

export const demoAlertas = [
  {
    id: "a1",
    consultaId: "c1",
    fecha: new Date(Date.now() - 3 *24 * 60 * 60 * 1000).toISOString(),
    hora: "09:00",
    motivo: "Chequeo general",
    estado: "seguimiento",
    patientId: "m1",
    patientName: "Loki",
    raza: "Pastor Alemán",
    ownerName: "Adrian Salazar",
    phone: "8095551234",
    doctorName: "Dr. Juan Pérez",
    categoria: "overdue",
  },
  {
    id: "a2",
    consultaId: "c2",
    fecha: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString(),
    hora: "10:30",
    motivo: "Control preventivo semestral",
    estado: "seguimiento",
    patientId: "m2",
    patientName: "Sachi",
    raza: "Mestiza",
    ownerName: "Adriana Hernández",
    phone: "8295555678",
    doctorName: "Dra. María López",
    categoria: "upcoming",
  },
];

export const demoConsultaClientes = [
  {
    id: "c1",
    nombre: "Adrian Salazar",
    telefono: "8095551234",
  },
  {
    id: "c2",
    nombre: "Adriana Hernández",
    telefono: "8295555678",
  },
];

export const demoConsultaMascotas = [
  {
    id: "m1",
    clienteId: "c1",
    nombre: "Loki",
    raza: "Pastor Alemán",
    edad: 3,
    sexo: "Macho",
    peso: "28",
  },
  {
    id: "m2",
    clienteId: "c2",
    nombre: "Sachi",
    raza: "Mestiza",
    edad: 2,
    sexo: "Hembra",
    peso: "12",
  },
];

export const demoConsultaDoctores = [
  {
    id: "d1",
    nombre: "Dr. Juan Pérez",
  },
  {
    id: "d2",
    nombre: "Dra. María López",
  },
];

export const demoTiposConsulta = [
  { id: "t1", codigo: "gen", nombre: "Examen general" },
  { id: "t2", codigo: "vac", nombre: "Vacuna" },
  { id: "t3", codigo: "med", nombre: "Medicación" },
  { id: "t4", codigo: "ill", nombre: "Enfermedad" },
  { id: "t5", codigo: "sur", nombre: "Cirugía" },
  { id: "t6", codigo: "emb", nombre: "Embarazo" },
];