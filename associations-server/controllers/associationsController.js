import * as service from '../services/associationsService.js';

export function getAssociations(req, res) {
    service.getAssociations(req, res);
}

export function findByregistration_date(req, res) {
    service.findByregistration_date(req, res);
}

