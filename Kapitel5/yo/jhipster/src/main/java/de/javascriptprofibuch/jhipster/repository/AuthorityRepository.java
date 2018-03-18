package de.javascriptprofibuch.jhipster.repository;

import de.javascriptprofibuch.jhipster.domain.Authority;

import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Spring Data MongoDB repository for the Authority entity.
 */
public interface AuthorityRepository extends MongoRepository<Authority, String> {
}
