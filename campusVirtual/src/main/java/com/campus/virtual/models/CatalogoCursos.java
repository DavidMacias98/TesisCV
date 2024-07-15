package com.campus.virtual.models;

import java.io.Serializable;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.PrePersist;
import javax.persistence.Table;

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
@Table(name = "cursos", schema = "catalogos")
//@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class CatalogoCursos   {
	 @OneToOne()
	 @JoinColumn()
	 //@JsonIgnoreProperties(value = {"curso"}, allowSetters=true, allowGetters = true)
	 @JsonManagedReference
	 private AdminUser docente;
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	

	private String name;
	
	private String edad;

	private Double precio;
	
//	@JsonManagedReference
//	@JsonInclude(JsonInclude.Include.NON_NULL)
//	@JsonBackReference
//	@JsonManagedReference
	 
	
	 
	
	@Column(nullable = true)
	private int orde;
	
	//@OneToMany(mappedBy = "curso", fetch = FetchType.LAZY,cascade = CascadeType.ALL)
	//private List<Materias> materias;
	
	@Column(name = "activo" )
	private Boolean activo;
	
	@PrePersist
	public void prePersist() {
		this.activo=true;
		
	}
	
	
}
