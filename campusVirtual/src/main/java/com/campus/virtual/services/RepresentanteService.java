package com.campus.virtual.services;

import java.util.List;

import com.campus.virtual.models.OrdenPago;

public interface RepresentanteService {


	/////////servicios orden de pago&////////////////
	Object addOrden(OrdenPago orden)throws Exception;
	List<?> getAllOrdenes(Long idRepre)throws Exception;
	
	List<?> getCalifiaciones(Long idStudent)throws Exception;
	
	
	

	
}
