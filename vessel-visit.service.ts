import { Injectable } from '@angular/core';
import { CommonApiService } from '../../shared/services/common-api.service';
import { VesselVisitObj } from '../vessel-visit-list/vesselvisit';
import { PackageType } from '../../admin/package-type/package-type';
import { CompanyObj } from '../../admin/company/company';
import { OpertationParticularsObj } from '../vessel-visit/opertationParticulars';
@Injectable()
export class VesselVisitService {

  constructor(private apiService: CommonApiService) { }
  
  getAllOmitReasonsList(OmitReasonObj) {
    return new Promise((resolve, reject) => {
      this.apiService.post(OmitReasonObj, 'admin/getAllOmitReasons').subscribe(res => {
        resolve(res['omitReasonList']);
      });
    });
  }
  getAllVesselVisit(vesselVisit) {
    return new Promise((resolve, reject) => {
      this.apiService.post(vesselVisit, 'admin/getAllVesselVisit').subscribe(res => {
        resolve(res['vesselVisitList']);
      });
    });
  }

  getVesselVisitDetails(id) {
    return new Promise((resolve, reject) => {
      this.apiService.getById('admin/getVesselVisitById/' + id).subscribe(res => {
        console.log(res);
        resolve(res);
      });
    });
  }
  deleteVesselVisit(id: String) {
    return this.apiService.delete('admin/deleteVesselVisit' + "/" + id);
  }
  omitRequest(vesselObj: VesselVisitObj){
    return this.apiService.post(vesselObj, 'admin/omitRequest');
  }
  createVesselVisit(vesselObj: VesselVisitObj) {
    return this.apiService.post(vesselObj, 'admin/createVesselVisit');
  }
  planningstatusData() {
    return this.apiService.getAll('admin/getPlanningStatus');
  }
  getBerthingSide() {
    return this.apiService.getAll('admin/getBerthingSide');
  }
  getAllShipSize(shipObj) {
    return new Promise((resolve, reject) => {
      this.apiService.post(shipObj, 'admin/getAllShipSize').subscribe(res => {
        resolve(res['shipSizeList']);
      });
    });
  }
  getShipTerminal(terminal) {
    return new Promise((resolve, reject) => {
      this.apiService.post(terminal, 'admin/getListOfTerminal').subscribe(res => {
        resolve(res['ShipTerminalList']);
      });
    });
  }
  getCargoDetailsList(cargoObj) {
    return new Promise((resolve, reject) => {
      this.apiService.post(cargoObj, 'admin/getCargoDetailsList').subscribe(res => {
        resolve(res['cargoDetailsList']);
      });
    });
  }
  getAllPort(newPort) {
    return new Promise((resolve, reject) => {
      this.apiService.post(newPort, 'admin/getAllPort').subscribe(res => {
        resolve(res['portList']);
      });
    });
  }

  getAllShipParticulars(perticularObj) {
    return new Promise((resolve, reject) => {
      this.apiService.post(perticularObj, 'admin/getAllShipParticulars').subscribe(res => {
        resolve(res['shipParticularsList']);
      });
    });
  }
  //Operation Particular
  getCargoTypes() {
    return this.apiService.getAll('vessel/getCargoTypes');
  }

  getOperation() {
    return this.apiService.getAll('admin/getOperation');
  }

  getallPackageType(pkgObj) {
    return new Promise((resolve, reject) => {
      this.apiService.post(pkgObj, 'admin/getallPackageType').subscribe(res => {
        resolve(res['packageTypeList']);
      });
    });
  }
  getAllCompany(comObj) {
    return new Promise((resolve, reject) => {
      this.apiService.post(comObj, 'admin/getAllCompany').subscribe(res => {
        resolve(res['companyList']);
      });
    });
  }
  //Oper Particulars

  getAllOperPerticulars(id:String) {
    return new Promise((resolve, reject) => {
      this.apiService.getAll('vessel/getAllOperPerticulars/' + id).subscribe(res => {
        resolve(res['operList']);
      });
    });
  }
  createOperParticular(OperParticular: OpertationParticularsObj) {
    return this.apiService.post(OperParticular, 'vessel/createOperParticular');
  }
  getOperPerticularsById(id: String) {
    return new Promise((resolve, reject) => {
      this.apiService.getById('vessel/getOperPerticularsById/' + id).subscribe(res => {
        console.log(res);
        resolve(res);
      });
    });
  }
  deleteOpertationParticular(id: String) {
    return this.apiService.delete('vessel/deleteOpertationParticular' + "/" + id);
  }

  //Supporting Doc
  uploadSupportingDoc(supprtingDoc) {
    return this.apiService.postUploadFile(supprtingDoc, 'admin/uploadSupportingDoc');
  }

  getAllDocumentSettingsList(docObject) {
    return new Promise((resolve, reject) => {
      this.apiService.post(docObject, 'admin/getDocumentSettingsList').subscribe(res => {
        resolve(res['documentsList']);
      });
    });
  }
  getDocList() {
    return this.apiService.getAll('admin/getDocList');
  }


  downloadTemplate(id) {
    return new Promise((resolve, reject) => {
      this.apiService.getById('admin/downloadTemplate/' + id).subscribe(res => {
        console.log(res);
        resolve(res);
      });
    });
    
  }
  


}
