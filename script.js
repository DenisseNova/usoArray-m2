let radiologia = [
  {hora:'11:00', especialista: 'IGNACIO SCHULZ', paciente: 'FRANCISCA ROJAS', rut: '9.878.782-1', prevision:'FONASA'},
  {hora:'11:30', especialista: 'FEDERICO SUBERCASEAUX', paciente:'PAMELA ESTRADA', rut:'15.345.241-3', prevision: 'ISAPRE'},
  {hora:'15:00', especialista: 'FERNANDO WURTHZ', paciente:'ARMANDO LUNA', rut:'16.445.345-9', prevision: 'ISAPRE'},
  {hora:'15:30', especialista: 'ANA MARIA GODOY', paciente: 'MANUEL GODOY', rut: '17.666.419-0', prevision:'FONASA'},
  {hora:'16:00', especialista: 'PATRICIA SUAZO', paciente: 'RAMON ULLOA', rut: '14.989.389-K', prevision:'FONASA'},
]

let traumatologia =[
  {hora:'8:00', especialista: 'MARIA PAZ ALTUZARRA', paciente: 'PAULA SANCHEZ', rut: '15.554.774-5', prevision:'FONASA'},
  {hora:'10:00', especialista: 'RAUL ARAYA', paciente:'ANGÉLICA NAVAS', rut:'15.444.147-9', prevision: 'ISAPRE'},
  {hora:'10:30', especialista: 'MARIA ARRIAGADA', paciente:'ANA KLAPP', rut:'17.879.423-9', prevision: 'ISAPRE'},
  {hora:'11:00', especialista: 'ALEJANDRO BADILLA', paciente:'FELIPE MARDONES', rut:'1.547.423-6', prevision: 'ISAPRE'},
  {hora:'11:30', especialista: 'CECILIA BUDNIK', paciente: 'DIEGO MARRE', rut: '16.554.741-K', prevision:'FONASA'},
  {hora:'12:00', especialista: 'ARTURO CAVAGNARO', paciente:'CECILIA MENDEZ', rut:'9.747.535-8', prevision: 'ISAPRE'},
  {hora:'12:30', especialista: 'ANDRES KANACRI', paciente:'MARCIAL SUAZO', rut:'11.254.785-5', prevision: 'ISAPRE'},
]
let dental = [
  {hora:'8:30', especialista: 'ANDREA ZUÑIGA', paciente:'MARCELA RETAMAL', rut:'11.123.425-6', prevision: 'ISAPRE'},
  {hora:'11:00', especialista: 'MARIA PIA ZAÑARTU', paciente:'ANGEL MUÑOZ', rut:'9.878.789-2', prevision: 'ISAPRE'},
  {hora:'11:30', especialista: 'SCARLETT WITTING', paciente: 'MARIO KAST', rut: '7.998.789-5', prevision:'FONASA'},
  {hora:'13:00', especialista: 'FRANCISCO VON TEUBER', paciente: 'KARIN FERNANDEZ', rut: '18.887.662-K', prevision:'FONASA'},
  {hora:'13:30', especialista: 'EDUARDO VIÑUELA', paciente: 'HUGO SANCHEZ', rut: '17.665.461-4', prevision:'FONASA'},
  {hora:'14:00', especialista: 'RAQUEL VILLASECA', paciente:'ANA SEPULVEDA', rut:'14.441.281-0', prevision: 'ISAPRE'},
]

function registro(especialidad){
  return especialidad.length-1;
};

let ultimoRad = registro(radiologia);
let atencionRadio = `Primera atención: ${radiologia[0].paciente} - ${radiologia[0].prevision} | Última atención: ${radiologia[ultimoRad].paciente} - ${radiologia[ultimoRad].prevision}`;
document.getElementById('atradio').innerHTML = atencionRadio;

let ultimoTra = registro(traumatologia);
let atencionTrauma = `Primera atención: ${traumatologia[0].paciente} - ${traumatologia[0].prevision} | Última atención: ${traumatologia[ultimoTra].paciente} - ${traumatologia[ultimoTra].prevision}`;
document.getElementById('attrau').innerHTML = atencionTrauma;

let ultimoDent = registro(dental);
let atencionDent = `Primera atención: ${dental[0].paciente} - ${dental[0].prevision} | Última atención: ${dental[ultimoDent].paciente} - ${dental[ultimoDent].prevision}`;
document.getElementById('atdent').innerHTML = atencionDent;

let tabla1 ="<tr><th>Hora</th><th>Especialista</th><th>Paciente</th><th>Rut</th><th>Previsión</th></tr>";

for(let i=0; i<radiologia.length; i++){
  tabla1 += 
  `<tr>
      <td>${radiologia[i].hora}</td>
      <td>${radiologia[i].especialista}</td>
      <td>${radiologia[i].paciente}</td>
      <td>${radiologia[i].rut}</td>
      <td>${radiologia[i].prevision}</td>
  </tr>`
}

document.getElementById('tabla-medicos-1').innerHTML = tabla1;
  
let tabla2 ="<tr><th>Hora</th><th>Especialista</th><th>Paciente</th><th>Rut</th><th>Previsión</th></tr>";

for(let i=0; i<traumatologia.length; i++){
  tabla2 += 
  `<tr>
      <td>${traumatologia[i].hora}</td>
      <td>${traumatologia[i].especialista}</td>
      <td>${traumatologia[i].paciente}</td>
      <td>${traumatologia[i].rut}</td>
      <td>${traumatologia[i].prevision}</td>
  </tr>`
}

document.getElementById('tabla-medicos-2').innerHTML = tabla2;

let tabla3 ="<tr><th>Hora</th><th>Especialista</th><th>Paciente</th><th>Rut</th><th>Previsión</th></tr>";

for(let i=0; i<dental.length; i++){
  tabla3 += 
  `<tr>
      <td>${dental[i].hora}</td>
      <td>${dental[i].especialista}</td>
      <td>${dental[i].paciente}</td>
      <td>${dental[i].rut}</td>
      <td>${dental[i].prevision}</td>
  </tr>`
}

document.getElementById('tabla-medicos-3').innerHTML = tabla3;

