package com.campus.virtual.services;

import java.util.List;

import com.campus.virtual.models.CatalogoCursos;
import com.campus.virtual.models.OrdenPago;
import com.campus.virtual.models.WebUser;
import com.campus.virtual.models.WebUserAddress;


public interface OrdenPagoService {

	
	Object add(OrdenPago newuser)throws Exception;
	
	List<?> getAllToPagar()throws Exception;
	
	Object pagar(Long idPago)throws Exception;
	

	/////servicio de docente////	
	
	
	
	
}