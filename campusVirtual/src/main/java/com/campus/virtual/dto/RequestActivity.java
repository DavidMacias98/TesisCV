package com.campus.virtual.dto;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import com.campus.virtual.models.AdminUser;
import com.campus.virtual.models.CatalogoTipoActividad;
import com.campus.virtual.models.Materias;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class RequestActivity {

	private String nameTema;
	
	private Materias materia;
	
	private AdminUser docente;
	
	private String fechaMaxEntrega;
	
	private CatalogoTipoActividad tipo;
	
	private String observacion;
	

}
