package ma.enset.gestionStage.repositories;

import ma.enset.gestionStage.entities.Stage;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface StageRepository extends JpaRepository<Stage,Long> {
    List<Stage> findByEtudiantId(Long etudiantId);
}
