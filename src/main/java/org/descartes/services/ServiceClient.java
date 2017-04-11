package org.descartes.services;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;

import org.descartes.domain.Client;

import java.util.List;



public class ServiceClient {
	EntityManager entityManager;
	
	public ServiceClient() {
		super();
		EntityManagerFactory emf = Persistence.createEntityManagerFactory("manager1");
		entityManager = emf.createEntityManager();
	}
	
	public Client findClient(String nom){
		List<Client> liste = entityManager.createQuery( "SELECT p FROM Client p WHERE p.nom LIKE :namePerson" )
				.setParameter( "namePerson", nom)
				.getResultList();
		return (Client) liste.get(0);
	}
	
	public List<?> findAll(){
		List liste = entityManager.createQuery( "SELECT p FROM Client p" )
				.getResultList();
		return liste;
	}
	
	public void addClient(Client client){
		EntityTransaction tx = entityManager.getTransaction();
		tx.begin();
		entityManager.persist(client);
		tx.commit();
	}
}
