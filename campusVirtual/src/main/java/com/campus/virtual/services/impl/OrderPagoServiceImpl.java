package com.campus.virtual.services.impl;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.campus.virtual.dto.OrdenPagoDTO;
import com.campus.virtual.models.CatalogoCursos;
import com.campus.virtual.models.CatalogoEstados;
import com.campus.virtual.models.OrdenPago;
import com.campus.virtual.repository.CatalogoCursosRepository;
import com.campus.virtual.repository.CuentaRepository;
import com.campus.virtual.repository.RepositoryOrder;
import com.campus.virtual.services.PublicService;
import com.campus.virtual.services.OrdenPagoService;

@Service
public class OrderPagoServiceImpl implements OrdenPagoService {

	@Autowired
	private RepositoryOrder RepoOrden;

	
	

	@Override
	public Object add(OrdenPago newCurso) throws Exception {
		// TODO Auto-generated method stub
		return this.RepoOrden.save(newCurso);
	}

	
	public List<?> getAllToPagar() throws Exception {

		List<OrdenPago>lista = new ArrayList<>();
		List<OrdenPagoDTO>response = new ArrayList<>();
		lista=(List<OrdenPago>) this.RepoOrden.getAllToPagar();
		lista.stream().forEach((x)->{
			OrdenPagoDTO ordenDTO= new OrdenPagoDTO();
			ordenDTO.setCodigo(x.getCodigo());
			ordenDTO.setCurso(x.getCurso());
			ordenDTO.setFechaCreada(x.getFechaCreada());
			ordenDTO.setFechaMaxPago(x.getFechaMaxPago());
			ordenDTO.setId(x.getId());
			ordenDTO.setNameRepre(x.getRepresentante().getName()+" "+ x.getRepresentante().getApe());
			ordenDTO.setCedulaRepre(x.getRepresentante().getId());
			ordenDTO.setNameStudent(x.getEstudiante().getName()+" "+x.getEstudiante().getApe());
			ordenDTO.setCedulaStudent(x.getEstudiante().getId());
			ordenDTO.setStatus(x.getStatus());
			ordenDTO.setTotal(new BigDecimal( x.getCurso().getPrecio()));
			response.add(ordenDTO);
		});
		
		return response;
	}

	@Override
	public Object pagar(Long idPago) throws Exception {
		OrdenPago orden= this.RepoOrden.findById(idPago).get();
			orden.setStatus(CatalogoEstados.builder().id((long)2).build());
			this.RepoOrden.save(orden);
		return "ok" ;
	}




}
