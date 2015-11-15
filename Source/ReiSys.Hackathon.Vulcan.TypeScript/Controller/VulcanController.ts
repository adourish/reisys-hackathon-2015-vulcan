﻿module ReiSysHackathon.Vulcan.Controller {
    export class VulcanController {
        private vulcanService: ReiSysHackathon.Vulcan.Service.VulcanService;
        constructor() {
            this.vulcanService = new ReiSysHackathon.Vulcan.Service.VulcanService();
        }

        GetContext(): any {
            return this.vulcanService.GetContext();
        }

        GetCountByIncidentType() {
            return this.vulcanService.GetCountByIncidentType();
        }

        GetDisasterSumAndCountData() {
            return this.vulcanService.GetDisasterSumAndCountData();
        }

        GetIncidentCountByYear() {
            return this.vulcanService.GetIncidentCountByYear();
        }

        AssistanceSummaryByYear() {
            return this.vulcanService.AssistanceSummaryByYear();
        }

        GetDisasterCountAndSumByState() {
            return this.vulcanService.GetDisasterCountAndSumByState();
        }

        GetDisasterPrediction() {
            var dpm = new ReiSysHackathon.Vulcan.Model.DisasterPredictionModel($('#txtDisasterType').val(), $('#txtStartDate').val(), $('#txtEndDate').val());
            var result = this.vulcanService.GetDisasterPrediction(dpm);
            var output = JSON.stringify(result.Results.output1);
            var o1 = JSON.parse(output).value.Values[0];
            $('#divOutput').html(o1);
            return;
        }

    }
}