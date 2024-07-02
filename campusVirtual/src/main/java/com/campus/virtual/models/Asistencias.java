package com.campus.virtual.models;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
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
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name = "Asistencias", schema = "campus")

public class Asistencias {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long id;
	
	@OneToOne
	@JoinColumn(name="curso")
	private CatalogoCursos curso;
	
	@OneToOne
	private AdminUser docente;

	@JsonFormat(pattern = "DD-MM-YYYY")
	private LocalDate fechaAsistencia;
	
	@OneToOne
	@JoinColumn(name="parcial")
	private CatalogoPeriodos parcial;
	
	
	@PrePersist
	public void prepersist() {
		
		this.fechaAsistencia = LocalDate.now();
		//this.codigo= this.representante.getName().substring(0,2)+ this.estudiante.getName().substring(0,2)+this.curso.getName().substring(0,2);
	}
	
	
}
