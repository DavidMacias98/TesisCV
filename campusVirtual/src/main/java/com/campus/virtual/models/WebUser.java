package com.campus.virtual.models;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;
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
import javax.persistence.PrePersist;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

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
@Table(name = "web_user", schema = "cuenta")
//@JsonIgnoreProperties(  value = {"pass"}, allowGetters = false, allowSetters = true)
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class WebUser implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	@Id
	//@GeneratedValue(strategy = GenerationType.IDENTITY)
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
	
	@Column(name = "imgperfil" )
	private String imgPerfi;;
	
	@Column(name = "imgdoc" )
	private String imgDoc;
	
	@Column(name = "imgvac" )
	private String imgVac;
	
	@Column(name = "rol" )
	private String rol;
	

	@Column(name = "isMatriculate")
	private Boolean isMatriculate;
	
	@OneToOne(fetch = FetchType.LAZY )
	@JoinColumn(name = "idRepre")
	private WebUser idRepre;
	
	@OneToOne( )
	@JoinColumn(name = "lastCurso")
	private CatalogoCursos lastCurso;
	
	@OneToOne( )
	@JoinColumn(name = "currentCurso")
	private CatalogoCursos currentCurso;
	
//	@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
//	@OneToOne( cascade = CascadeType.ALL)
//	@JoinColumn(name = "activeAdrees", nullable = true)
//	private WebUserAddress activeAddress;
	
	@Column(name = "activo")
	private Boolean activo;
	
	@Column(name = "conciliado")
	private Boolean conciliado;
	
	@Column(name = "aceptaInfoCorrecta")
	private Boolean aceptaInfoCorrecta;
	

	@PrePersist
	public void prePersist() {
		this.isMatriculate=false;
		this.conciliado=null;
		this.activo=true;
		
	}
	






}
