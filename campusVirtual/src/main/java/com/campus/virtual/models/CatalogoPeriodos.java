package com.campus.virtual.models;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name = "peridos", schema = "catalogos")
public class CatalogoPeriodos implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long id;
	
	@Column(name = "anioAcademico" )
	private int anioAcademico;
	
	@Column(name = "name" )
	private String name;
	
	@OneToOne
	@JoinColumn(name = "tipo" )
	private CatalogoTipoPeriodos tipo;
	
	@Column(name = "fechaCulmina" )
	private LocalDate fechaCulmina;
	
	@Column(name = "activo" )
	private Boolean activo;
	
	
	

}
