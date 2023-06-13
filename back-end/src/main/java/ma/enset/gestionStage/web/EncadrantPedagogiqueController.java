package ma.enset.gestionStage.web;

import ma.enset.gestionStage.entities.Stage;
import ma.enset.gestionStage.services.StageService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
public class EncadrantPedagogiqueController {
    @RestController
    @RequestMapping("/api/encadrant")
    public class EncadrantStageController {

        private StageService stageService;
/*
        @GetMapping("/etudiant/{etudiantId}/stages")
        public ResponseEntity<List<Stage>> getStagesByEtudiantId(@PathVariable Long etudiantId) {
            List<Stage> stages = stageService.getStagesByEtudiantId(etudiantId);
            return new ResponseEntity<>(stages, HttpStatus.OK);
        }

 */
    }
}
