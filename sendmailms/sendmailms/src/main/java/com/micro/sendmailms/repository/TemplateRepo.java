package com.micro.sendmailms.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.micro.sendmailms.models.Templates;



public interface TemplateRepo extends JpaRepository<Templates, String>{

}
