package com.campus.virtual.models;

import java.io.Serializable;
import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

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
@Table(name = "admin_user", schema = "cuenta")
@JsonIgnoreProperties(  value = {"pass"}, allowGetters = false, allowSetters = true)
public class AdminUser implements Serializable {
	
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long id;
	
	@Column(name = "document" )
	private String document;
	
	@Column(name = "name" )
	private String name;
	
	
	@Column(name = "ape" )
	private String ape;
	
	@Column(name = "whatsapp" )
	private String whatsapp;
	
	@NotNull(message = "correo no puede ser null")
	@Email(message = "Correo no valido")
	@Column(name = "usser" , unique = true)
	private String usser;
	
	@Column(name = "pass" )
	private String pass;
	
	@Column(name = "img" )
	private String imgPerfi;
		
	@Column(name = "rol" )
	private String rol;
	
	
	
	@Column(name = "nameCurso" )
	private String nameCurso;
	
	
	
//	@JsonInclude(JsonInclude.Include.NON_NULL)
//	@JsonBackReference
//	@JsonManagedReference
	@JsonIgnore
	@OneToOne()
	private CatalogoCursos curso;
	
//	@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
//	@OneToOne( cascade = CascadeType.ALL)
//	@JoinColumn(name = "activeAdrees", nullable = true)
//	private WebUserAddress activeAddress;
	
	@Column(name = "activo")
	private Boolean activo;
}
