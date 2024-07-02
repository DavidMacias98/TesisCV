package com.campus.virtual.services.impl;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.campus.virtual.dto.CalificacionesDTO;
import com.campus.virtual.dto.OrdenPagoDTO;
import com.campus.virtual.models.ActivityDetalles;
import com.campus.virtual.models.CatalogoCursos;
import com.campus.virtual.models.CatalogoEstados;
import com.campus.virtual.models.Materias;
import com.campus.virtual.models.OrdenPago;
import com.campus.virtual.models.WebUser;
import com.campus.virtual.repository.ActivityDetalleRepository;
import com.campus.virtual.repository.CatalogoCursosRepository;
import com.campus.virtual.repository.CuentaRepository;
import com.campus.virtual.repository.RepositoryOrder;
import com.campus.virtual.services.PublicService;
import com.campus.virtual.services.RepresentanteService;

@Service
public class RepresentanteServiceImpl implements RepresentanteService {
	
	@Autowired
	private RepositoryOrder RepoOrden;
	
	@Autowired
	private ActivityDetalleRepository ActDetRepo;
	
	@Autowired
	private CuentaRepository cuentaRepo;;
///////////////////////////////SERVICIOS ORDENES DE PAGO//////////////////////////////

	@Override
	public Object addOrden(OrdenPago orden) throws Exception {
		WebUser student= new WebUser();
		orden.setStatus(CatalogoEstados.builder().id((long)1).build());
		student=cuentaRepo.findById(orden.getEstudiante().getId()).get();
		student.setIsMatriculate(true);
		student.setCurrentCurso(orden.getCurso());
		this.cuentaRepo.save(student);
	return RepoOrden.save(orden);
	}

	@Override
	public List<?> getAllOrdenes(Long idRepre) throws Exception {

		List<OrdenPago>lista = new ArrayList<>();
		List<OrdenPagoDTO>response = new ArrayList<>();

		
		lista=(List<OrdenPago>) this.RepoOrden.findByRepresentante(idRepre);
		lista.stream().forEach((x)->{
			OrdenPagoDTO ordenDTO= new OrdenPagoDTO();
			ordenDTO.setCodigo(x.getCodigo());
			ordenDTO.setCurso(x.getCurso());
			ordenDTO.setFechaCreada(x.getFechaCreada());
			ordenDTO.setFechaMaxPago(x.getFechaMaxPago());
			ordenDTO.setId(x.getId());
			ordenDTO.setNameRepre(x.getRepresentante().getName()+" "+ x.getRepresentante().getApe());
			ordenDTO.setNameStudent(x.getEstudiante().getName()+" "+x.getEstudiante().getApe());
			ordenDTO.setStatus(x.getStatus());
			ordenDTO.setTotal(new BigDecimal( x.getCurso().getPrecio()));
			response.add(ordenDTO);
		});
		
		
		return response;
}
	
	
	@Override
	public List<?> getCalifiaciones(Long idStudent){
		
		
		List<Materias> lisMaterias= new ArrayList<>();
		
		List<CalificacionesDTO> response= new ArrayList<>();
		lisMaterias=(List<Materias>) this.ActDetRepo.getMateriasActByStudent(idStudent);
		
		lisMaterias.stream().forEach((m)->{
			CalificacionesDTO calificacion= new CalificacionesDTO();
			calificacion.setMateria(m);
			calificacion.setPromTallerGrupal(this.ActDetRepo.getPromTallerGrupalByMateria(m.getId()));
			calificacion.setPromTallerInv(this.ActDetRepo.getPromTallerIndByMateria(m.getId()));
			calificacion.setPromTarea(this.ActDetRepo.getPromTareaByMateria(m.getId()));
			calificacion.setPromLeccion(this.ActDetRepo.getPromLeccionByMateria(m.getId()));
			calificacion.setExamen(this.ActDetRepo.getPromExamByMateria(m.getId()));
			
			
			response.add(calificacion);
		});
		
		return response;
		
	}
	
	
	
	
	
	
	
	
	
}
