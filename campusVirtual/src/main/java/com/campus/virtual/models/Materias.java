package com.campus.virtual.models;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
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
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "Materias", schema = "catalogos")
public class Materias {


	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long id;
	
	@Column(name = "codigo")
	private String codigo;
	
	@Column(name="name")
	private String name;
	
	@OneToOne
	@JoinColumn(name="Curso")
	private CatalogoCursos curso;
	
	@JsonFormat(pattern = "DD-MM-YYYY")
	private LocalDate fechaCreada;
	
	private Boolean activo;
	
	@PrePersist
	public void prepersist() {
		this.fechaCreada= LocalDate.now();
		this.activo=true;
	}
	
	
	
}
