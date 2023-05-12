export function getAssociations(req, res) {
    res.send([{
        registration_date:1
    }]);
}

export function findByregistration_date(req, res) {
    res.send({
        registration_date:1
    });
}

