import 'reflect-metadata';

import { IDbManager } from './db/db-interface';
import { DbManager } from './db/db-manager';
import { IHelloDataLayer } from './interfaces/ihello-data-layer';
import { HelloDataLayer } from '../data-layers/hello-data-layer';
// import { ISettlementRunDataLayer } from './interfaces/data-layers/settlement/settlement-run/isettlement-run-data-layer';
import { IHelloController } from './interfaces/ihello-controller';
import { HelloController } from '../controllers/hello-controller';
// import { IAuthoriseSettlementRunController } from './interfaces/controllers/settlement/settlement-run/iauthorise-settlement-run-controller';
// import { IRefreshSettlementRunController } from './interfaces/controllers/settlement/settlement-run/irefresh-settlement-run-controller';
// import {
//   ISettlementRunController
// } from './interfaces/controllers/settlement/settlement-run/isettlement-run-controller';
// import { SettlementRunController } from '../controllers/settlement/settlement-run/settlement-run-controller';
// import { AuthoriseSettlementRunController } from '../controllers/settlement/settlement-run/authorise-settlement-run-controller';
// import { RefreshSettlementRunController } from '../controllers/settlement/settlement-run/refresh-settlement-run-controller';
// import { SettlementRunDataLayer } from '../data-layers/settlement/settlement-run/settlement-run-data-layer';
import { IOCTYPES } from './ioc-types';

import { Container } from 'inversify';
// import { IPostDataLayer } from './interfaces/data-layers/settlement/post/ipost-data-layer';
// import { IBatchjobInsertionForPaymentRunningController } from './interfaces/controllers/settlement/post/ibatch-job-insertion-payment-running-controller';
// import { ICountFromBatchJobController } from './interfaces/controllers/settlement/post/icount-from-batchjob-controller';
// import { ICountFromExpectedPaymentController } from './interfaces/controllers/settlement/post/icount-from-expected-payment-controller';
// import { IPostAuthorisationValidationController } from './interfaces/controllers/settlement/post/ipost-authorisation-validation-controller';
// import { IUpdateBillingRunTrkController } from './interfaces/controllers/settlement/post/iupdate-billing-run-trk-controller';
// import { PostDataLayer } from '../data-layers/settlement/post/post-data-layer';
// import { CountFromBatchJobController } from '../controllers/settlement/post/count-from-batchjob-controller';
// import { CountFromExpectedPaymentController } from '../controllers/settlement/post/count-from-expected-payment-controller';
// import { PostAuthorisationValidationController } from '../controllers/settlement/post/post-authorisation-validation-controller';
// import { UpdateBillingRunTrkController } from '../controllers/settlement/post/update-billing-run-trk-controller';
// import { ReviewDetailsController } from '../controllers/prudential/prudential-review-standard/home/review-details-controller';
// import { IReviewDetailsController } from './interfaces/controllers/prudential/prudential-review-standard/home/ireview-details-controller';
// import { IHomeDataLayer } from './interfaces/data-layers/prudential/prudential-review-standard/home/ihome-data-layer';
// import { HomeDataLayer } from '../data-layers/prudential/prudential-review-standard/home/home-data-layer';
// import { ICompanyDetailsController } from './interfaces/controllers/prudential/prudential-review-standard/home/icompany-details-controller';
// import { CompanyDetailsController } from '../controllers/prudential/prudential-review-standard/home/company-detail-controller';
// import { TerminateReviewController } from '../controllers/prudential/prudential-review-standard/home/terminate-review-controller';
// import { ITerminateReviewController } from './interfaces/controllers/prudential/prudential-review-standard/home/iterminate-review-controller';
// import { INewReviewDataLayer } from './interfaces/data-layers/prudential/prudential-review-standard/new-review/inew-review-data-layer';
// import { NewReviewDataLayer } from '../data-layers/prudential/prudential-review-standard/new-review/new-review-data-layer';
// import { ICalculationUptoDateController } from './interfaces/controllers/prudential/prudential-review-standard/new-review/icalculation-upto-date-controller';
// import { CalculationUptoDateController } from '../controllers/prudential/prudential-review-standard/new-review/calculation-upto-date-controller';
// import { ICompletedReviewDetailsController } from './interfaces/controllers/prudential/prudential-review-standard/new-review/icompleted-review-details-controllers';
// import { CompletedReviewDetailsController } from '../controllers/prudential/prudential-review-standard/new-review/completed-review-details-controller';
// import { ISelectScheduleDetailsController } from './interfaces/controllers/prudential/prudential-review-standard/new-review/iselect-schedule-details-controller';
// import { SelectScheduleDetailsController } from '../controllers/prudential/prudential-review-standard/new-review/select-schedule-details-controller';
// import { ISaveReviewDetailsController } from './interfaces/controllers/prudential/prudential-review-standard/new-review/isave-review-details-controller';
// import { SaveReviewDetailsController } from '../controllers/prudential/prudential-review-standard/new-review/save-review-details-controller';
// import { ISettlementHomeController } from './interfaces/controllers/settlement/home/isettlement-home-controller';
// import { ISettlementHomeDataLayer } from './interfaces/data-layers/settlement/home/isettlement-home-data-layer';
// import { SettlementHomeController } from '../controllers/settlement/home/settlement-home-controller';
// import { SettlementHomeDataLayer } from '../data-layers/settlement/home/settlement-home-data-layer';
// import { GetStatusController } from '../controllers/settlement/bill-run/get-status-controller';
// import { IGetStatusController } from './interfaces/controllers/settlement/bill-run/iget-status-controller';
// import { IBillRunDataLayer } from './interfaces/data-layers/settlement/bill-run/ibill-run-data-layer';
// import { IGetGridDataController } from './interfaces/controllers/settlement/bill-run/iget-grid-data-controller';
// import { GetGridDataController } from '../controllers/settlement/bill-run/get-grid-data-controller';
// import { IProceedStatusController } from './interfaces/controllers/settlement/bill-run/iproceed-status-controller';
// import { ProceedStatusController } from '../controllers/settlement/bill-run/proceed-status-controller';
// import { IMaintainScheduleDataLayer } from './interfaces/data-layers/prudential/maintain-schedule/imaintain-schedule-data-layer';
// import { MaintainScheduleDataLayer } from '../data-layers/prudential/maintain-schedule/maintain-schedule-data-layer';
// import { IGetMaintainScheduleDataController } from './interfaces/controllers/prudential/maintain-schedule/iget-maintain-schedule-data-controller';
// import { GetMaintainScheduleDataController } from '../controllers/prudential/maintain-schedule/get-maintain-schedule-data-controller';
// import { IPaymentDataLayer } from './interfaces/data-layers/settlement/payment/ipayment-data-layer';
// import { PaymentDataLayer } from '../data-layers/settlement/payment/payment-data-layer';
// import { IChangeParticipantDetailsController } from './interfaces/controllers/settlement/payment/ichange-participant-details-controller';
// import { ChangeParticipantDetailsController } from '../controllers/settlement/payment/change-participant-details-controller';
// import { IParticipantDetailsController } from './interfaces/controllers/settlement/payment/iparticipant-details-controller';
// import { ParticipantDetailsController } from '../controllers/settlement/payment/participant-details-controller';
// import { YearWeekDetailsController } from '../controllers/settlement/payment/year-week-details-controller';
// import { IYearWeekDetailsController } from './interfaces/controllers/settlement/payment/iyear-week-details-controller';
// import { IPaymentMethodsController } from './interfaces/controllers/settlement/payment/ipayment-methods-controller';
// import { PaymentMethodsController } from '../controllers/settlement/payment/payment-method-controller';
// import { PaymentTypesController } from '../controllers/settlement/payment/payment-types-detailes-controller';
// import { IPaymentTypesController } from './interfaces/controllers/settlement/payment/ipayment-types-controller';
// import { BillingWeekYearController } from '../controllers/settlement/payment/billing-week-year-controller';
// import { IBillingWeekYearController } from './interfaces/controllers/settlement/payment/ibilling-week-year-controller';
// import { PaymentNominationGridController } from '../controllers/settlement/payment/payment-nomination-grid-controller';
// import { IPaymentNominationGridController } from './interfaces/controllers/settlement/payment/ipayment-nomination-grid-controller';
// import { AdjustDataLayer } from '../data-layers/settlement/adjust/adjust-data-layer';
// import { IAdjustDataLayer } from './interfaces/data-layers/settlement/adjust/iadjust-data-layer';
// import { IAdjustDataController } from './interfaces/controllers/settlement/adjust/iadjust-data-controller';
// import { AdjustDataController } from '../controllers/settlement/adjust/adjust-data-controller';
// import { BillRunDataLayer } from '../data-layers/settlement/bill-run/bill-run-data-layer';
// import { IProceedController } from './interfaces/controllers/settlement/bill-run/iproceed-controller';
// import { ProceedController } from '../controllers/settlement/bill-run/proceed-controller';
// import { IAdjustImportController } from './interfaces/controllers/settlement/adjust/iadjust-import-controller';
// import { AdjustImportController } from '../controllers/settlement/adjust/adjust-import-controller';
// import { PreSelectWeekController } from '../controllers/settlement/payment/pre-select-week-controller';
// import { IPreSelectWeekController } from './interfaces/controllers/settlement/payment/ipre-select-week-controller';
// import { IPaymentNominationController } from './interfaces/controllers/settlement/payment/ipayment-nomination-controller';
// import { PaymentNominationController } from '../controllers/settlement/payment/payment-nomination-controller';
// import { IParticipantEnergyPatternController } from './interfaces/controllers/prudential/maximum-credit-limit/energy-pattern/iparticipant-energy-pattern-controller';
// import { IEnergyPatternDataLayer } from './interfaces/data-layers/prudential/new-prudential-standard/maximum-credit-limit/ienergy-pattern-data-layer';
// import { EnergyPatternDataLayer } from '../data-layers/prudential/new-prudential-standard/maximum-credit-limit/energy-pattern-data-layer';
// import { IGetSeasonListController } from './interfaces/controllers/prudential/maintain-schedule/iget-season-list-controller';
// import { GetSeasonListController } from '../controllers/prudential/maintain-schedule/get-season-list-controller';
// import { IAddEditScheduleController } from './interfaces/controllers/prudential/maintain-schedule/iadd-edit-schedule-controller';
// import { AddEditScheduleController } from '../controllers/prudential/maintain-schedule/add-edit-schedule-controller';
// import { IDeleteMaintainScheduleController } from './interfaces/controllers/prudential/maintain-schedule/idelete-maintain-schedule-controller';
// import { DeleteMaintainScheduleController } from '../controllers/prudential/maintain-schedule/delete-maintain-schedule-controller';
// import { IVfPercentileWfAdjustPriceController } from './interfaces/controllers/prudential/new-prudential-standard/maximun-credit-limit/vf-percentile-wf-adjust-price/ivf-percentile-wf-adjust-price-controller';
// import { VfPercentileWfAdjustPriceController } from '../controllers/prudential/new-prudential-standard/maximum-credit-limit/vf-percentile-wf-adjust-price/vf-percentile-wf-adjust-price-controller';
// import { VfPercentileWfAdjustPriceDataLayer } from '../data-layers/prudential/new-prudential-standard/maximum-credit-limit/vf-percentile-wf-adjust-price/vf-percentile-wf-adjust-price-data-layer';
// import { IVfPercentileWfAdjustPriceDataLayer } from './interfaces/data-layers/prudential/new-prudential-standard/maximum-credit-limit/vf-percentile-wf-adjust-price/vf-percentile-wf-adjust-price-data-layer';
// import { IInsertEventQueuePackageController } from './interfaces/controllers/settlement/post/iinsert-event-queue-package-controller';
// import {
//   InsertEventQueuePackageController
// } from '../controllers/settlement/post/insert-event-queue-package-controller';
// import { IPaymentNominationAuthorityController } from './interfaces/controllers/settlement/payment/ipayment-nomination-authority-controller';
// import { PaymentNominationAuthorityController } from '../controllers/settlement/payment/payment-nomination-authority-controller';
// import { IProceedPostingOnNonPostingDayController } from './interfaces/controllers/settlement/post/iproceed-posting-on-non-posting-day-controller';
// import { ProceedPostingOnNonPostingDayController } from '../controllers/settlement/post/proceed-posting-on-non-posting-day-controller';
// import { IAnalysisStatusController } from './interfaces/controllers/prudential/maximum-credit-limit/energy-pattern/ianalysis-status-controller';
// import { IAnalyzedStatusDetailsController } from './interfaces/controllers/prudential/maximum-credit-limit/energy-pattern/ianalyzed-status-details-controller';
// import { BatchjobInsertionForPaymentRunningController } from '../controllers/settlement/post/batch-job-insertion-for-payment-running-controller';
// import { IBatchJobInsertionForOtherRuntypeController } from './interfaces/controllers/settlement/post/ibatch-job-insertion-for-other-runtype-controller';
// import { BatchJobInsertionForOtherRuntypeController } from '../controllers/settlement/post/batch-job-insertion-for-other-runtype-controller';
// import { IBatchJobInsertionForPrelimRuntypeController } from './interfaces/controllers/settlement/post/ibatch-job-insertion-for-prelim-runtype-controller';
// import { BatchJobInsertionForPrelimRuntypeController } from '../controllers/settlement/post/batch-job-insertion-for-prelim-runtype-controller';
// import { ILikeSeasonController } from './interfaces/controllers/prudential/prudential-review-standard/home/ilike-season-controller';
// import { LikeSeasonController } from '../controllers/prudential/prudential-review-standard/home/like-season-controller';
// import { AnalysisStatusController } from '../controllers/prudential/new-prudential-standard/maximum-credit-limit/energy-pattern/analysis-status-controller';
// import { ParticipantEnergyPatternController } from '../controllers/prudential/new-prudential-standard/maximum-credit-limit/energy-pattern/participant-energy-pattern-controller';
// import { AnalysisPendingStatusController } from '../controllers/prudential/new-prudential-standard/maximum-credit-limit/energy-pattern/analyzed-status-details-controller';
// import { OverlapScheduleCountController } from '../controllers/prudential/maintain-schedule/overlap-schedule-count-controller';
// import { IOverlapScheduleCountController } from './interfaces/controllers/prudential/maintain-schedule/ioverlap-schedule-count-controller';
// import { IPaymentTrackingHeaderDetailsController } from './interfaces/controllers/prudential/payment-tracking/ipayment-tracking-header-details-controller';
// import { IPaymentTrackingDataLayer } from './interfaces/data-layers/prudential/payment-tracking/ipayment-tracking-data-layer';
// import { PaymentTrackingHeaderDetailsController } from '../controllers/prudential/payment-tracking/payment-tracking-header-details-controller';
// import { PaymentTrackingDataLayer } from '../data-layers/prudential/payment-tracking/payment-tracking-data-layer';
// import { IBreadCrumbController } from './interfaces/controllers/prudential/new-prudential-standard/maximun-credit-limit/bread-crumb/ibread-crumb-controller';
// import { BreadCrumbController } from '../controllers/prudential/new-prudential-standard/maximum-credit-limit/bread-crumb/bread-crumb-controller';
// import { IBreadCrumbDataLayer } from './interfaces/data-layers/prudential/new-prudential-standard/maximum-credit-limit/bread-crumb/ibread-crumb-data-layer';
// import { BreadCrumbDataLayer } from '../data-layers/prudential/new-prudential-standard/maximum-credit-limit/bread-crumb/bread-crumb-data-layer';
// import { IPaymentTrackingGridDataController } from './interfaces/controllers/prudential/payment-tracking/ipayment-tracking-grid-data-controller';
// import { PaymentTrackingGridDataController } from '../controllers/prudential/payment-tracking/payment-tracking-grid-data-controller';
// import { PrafAnalysisController } from '../controllers/prudential/new-prudential-standard/maximum-credit-limit/praf-analysis/praf-analysis-controller';
// import { IPrafAnalysisController } from './interfaces/controllers/prudential/new-prudential-standard/maximun-credit-limit/praf-analysis/ipraf-analysis-controller';
// import { IPrafAnalysisDataLayer } from './interfaces/data-layers/prudential/new-prudential-standard/maximum-credit-limit/praf-analysis/ipraf-analysis-data-layer';
// import { PrafAnalysisDataLayer } from '../data-layers/prudential/new-prudential-standard/maximum-credit-limit/praf-analysis/praf-analysis-data-layer';
// import { LoadGenerationGraphController } from '../controllers/prudential/new-prudential-standard/maximum-credit-limit/energy-pattern/load-generation-graph-controller';
// import { ILoadGenerationGraphController } from './interfaces/controllers/prudential/maximum-credit-limit/energy-pattern/iload-generation-graph-controller';
// import { IImportPaymentTrackingDataController } from './interfaces/controllers/prudential/payment-tracking/iimport-payment-tracking-data-controller';
// import { ImportPaymentTrackingDataController } from '../controllers/prudential/payment-tracking/import-payment-tracking-data-controller';
// import { IVFHHProfileAverageRRPController } from './interfaces/controllers/prudential/new-prudential-standard/maximun-credit-limit/vf-hh-profile-average-rrp/ivf-hh-profile-average-rrp-controller';
// import { VFHHProfileAverageRRPController } from '../controllers/prudential/new-prudential-standard/maximum-credit-limit/vf-hh-profile-average-rrp/vf-hh-profile-average-rrp-controller';
// import { IVFHHProfileAverageRRPDataLayer } from './interfaces/data-layers/prudential/new-prudential-standard/maximum-credit-limit/vf-hh-profile-average-rrp/ivf-hh-profile-average-rrp-data-layer';
// import { VFHHProfileAverageRRPDataLayer } from '../data-layers/prudential/new-prudential-standard/maximum-credit-limit/vf-hh-profile-average-rrp/vf-hh-profile-average-rrp-data-layer';
// import { IHistoricalReviewController } from './interfaces/controllers/prudential/new-prudential-standard/maximun-credit-limit/vf-hh-profile-average-rrp/ihistorical-review-controller';
// import { HistoricalReviewController } from '../controllers/prudential/new-prudential-standard/maximum-credit-limit/vf-hh-profile-average-rrp/historical-review-controller';
// import { IVFReportController } from './interfaces/controllers/prudential/new-prudential-standard/maximun-credit-limit/vf-hh-profile-average-rrp/ivf-report-controller';
// import { VFReportController } from '../controllers/prudential/new-prudential-standard/maximum-credit-limit/vf-hh-profile-average-rrp/vf-report-controller';
// import { CheckDeleteInsertReviewsForVFAvgController } from '../controllers/prudential/new-prudential-standard/maximum-credit-limit/vf-hh-profile-average-rrp/check-delete-insert-reviews-controller';
// import { ICheckDeleteInsertReviewsForVFAvgController } from './interfaces/controllers/prudential/new-prudential-standard/maximun-credit-limit/vf-hh-profile-average-rrp/icheck-delete-insert-reviews-controller';
// import { AuthorizeVFAvgController } from '../controllers/prudential/new-prudential-standard/maximum-credit-limit/vf-hh-profile-average-rrp/authorize-vf-avg-controller';
// import { IAuthorizeVFAvgController } from './interfaces/controllers/prudential/new-prudential-standard/maximun-credit-limit/vf-hh-profile-average-rrp/iauthorize-vf-avg-controller';
// import { IWebsiteCSVReportController } from './interfaces/controllers/prudential/new-prudential-standard/maximun-credit-limit/vf-hh-profile-average-rrp/iwebsite-csv-report-controller';
// import { WebsiteCSVeportController } from '../controllers/prudential/new-prudential-standard/maximum-credit-limit/vf-hh-profile-average-rrp/website-csv-report-controller';
// import { IAvailableParticipantListController } from './interfaces/controllers/prudential/new-prudential-standard/maximun-credit-limit/participants/iavailable-participant-list-controller';
// import { AvailableParticipantListController } from '../controllers/prudential/new-prudential-standard/maximum-credit-limit/participants/available-participant-list-controller';
// import { IParticipantsDataLayer } from './interfaces/data-layers/prudential/new-prudential-standard/maximum-credit-limit/participants/iparticipants-data-layer';
// import { ParticipantsDataLayer } from '../data-layers/prudential/new-prudential-standard/maximum-credit-limit/participants/participants-data-layer';
// import { IParticipantsForMclReviewController } from './interfaces/controllers/prudential/new-prudential-standard/maximun-credit-limit/participants/iparticipants-for-mcl-review-controller';
// import { ParticipantsForMclReviewController } from '../controllers/prudential/new-prudential-standard/maximum-credit-limit/participants/participants-for-mcl-review-controller';
// import { ICalculateVFHHProfileAverageRRPController } from './interfaces/controllers/prudential/new-prudential-standard/maximun-credit-limit/vf-hh-profile-average-rrp/icalculate-vf-avg-rrp-controller';
// import { CalculateVFHHProfileAverageRRPController } from '../controllers/prudential/new-prudential-standard/maximum-credit-limit/vf-hh-profile-average-rrp/calculate-vf-avg-rrp-controller';
// import { IVFAvgPriceCalculationModule } from './interfaces/data-layers/prudential/new-prudential-standard/maximum-credit-limit/vf-hh-profile-average-rrp/ivfavg-price-calculation-module';
// import { IAnalysisDataController } from './interfaces/controllers/prudential/maximum-credit-limit/energy-pattern/ianalysis-data-controller';
// import { AnalysisDataController } from '../controllers/prudential/new-prudential-standard/maximum-credit-limit/energy-pattern/analysis-data-controller';
// import { GetCompareReviewPrafSummaryController } from '../controllers/prudential/new-prudential-standard/maximum-credit-limit/praf-analysis/get-compare-review-praf-summary-controller';
// import { IGetCompareReviewPrafSummaryController } from './interfaces/controllers/prudential/new-prudential-standard/maximun-credit-limit/praf-analysis/iget-compare-review-praf-summary-controller';
// import { GetCompanyRegionMapByReviewController } from '../controllers/prudential/new-prudential-standard/maximum-credit-limit/praf-analysis/get-company-region-map-by-review-controller';
// import { IGetCompanyRegionMapByReviewController } from './interfaces/controllers/prudential/new-prudential-standard/maximun-credit-limit/praf-analysis/iget-company-region-map-by-review-controller';
// import { IOperatingParticipantsController } from './interfaces/controllers/prudential/new-prudential-standard/maximun-credit-limit/participants/ioperating-participants-controller';
// import { OperatingParticipantsController } from '../controllers/prudential/new-prudential-standard/maximum-credit-limit/participants/operating-participants-controller';
// import { ISaveParticipantsForMclReviewController } from './interfaces/controllers/prudential/new-prudential-standard/maximun-credit-limit/participants/isave-participants-for-mcl-review-controller';
// import { SaveParticipantsForMclReviewController } from '../controllers/prudential/new-prudential-standard/maximum-credit-limit/participants/save-participants-for-mcl-review-controller';
// import { IUpdateReviewDetailsController } from './interfaces/controllers/prudential/prudential-review-standard/home/iupdate-review-details-controller';
// import { UpdateReviewDetailsController } from '../controllers/prudential/prudential-review-standard/home/update-review-details-controller';
// import { IPrudentialActionLogDataLayer } from './interfaces/data-layers/prudential/prudential-action-log/iprudential-action-log-data-layer';
// import { IPrudentialDateRunNumberController } from './interfaces/controllers/prudential/prudential-action-log/iprudential-date-run-number-controller';
// import { PrudentialActionLogDataLayer } from '../data-layers/prudential/prudential-action-log/prudential-action-log-data-layer';
// import { PrudentialDateRunNumberController } from '../controllers/prudential/prudential-action-log/prudential-date-run-number-controller';
// import { IActionIdListController } from './interfaces/controllers/prudential/prudential-action-log/iaction-id-list-controller';
// import { ActionIdListController } from '../controllers/prudential/prudential-action-log/action-id-list-controller';
// import { ICompanyIdListController } from './interfaces/controllers/prudential/prudential-action-log/icompany-id-list-controller';
// import { CompanyIdListController } from '../controllers/prudential/prudential-action-log/company-id-list-controller';
// import { ICheckVfCalculationStatusController } from './interfaces/controllers/prudential/new-prudential-standard/maximun-credit-limit/vf-hh-profile-average-rrp/icheck-vf-calculation-status-controller';
// import { CheckVfCalculationStatusController } from '../controllers/prudential/new-prudential-standard/maximum-credit-limit/vf-hh-profile-average-rrp/check-vf-calculation-status-controller';
// import { IAuthorisePrudentialActionLogController } from './interfaces/controllers/prudential/prudential-action-log/iauthorise-prudential-action-log-controller';
// import { AuthorisePrudentialActionLogController } from '../controllers/prudential/prudential-action-log/authorise-prudential-action-log-controller';
// import { ICompanyListController } from './interfaces/controllers/prudential/prudential-adjustment/icompany-list-controller';
// import { CompanyListController } from '../controllers/prudential/prudential-adjustment/company-list-controller';
// import { IPrudentialAdjustmentDataLayer } from './interfaces/data-layers/prudential/prudential-adjustment/iprudential-adjustment-data-layer';
// import { PrudentialAdjustmentDataLayer } from '../data-layers/prudential/prudential-adjustment/prudential-adjustment-data-layer';
// import { IPrudentialAdjustmentListController } from './interfaces/controllers/prudential/prudential-adjustment/iprudential-adjustment-list-controller';
// import { PrudentialAdjustmentListController } from '../controllers/prudential/prudential-adjustment/prudential-adjustment-list-controller';
// import { IBillingRunController } from './interfaces/controllers/prudential/prudential-adjustment/ibilling-run-controller';
// import { BillingRunController } from '../controllers/prudential/prudential-adjustment/billing-run-controller';
// import { ITerminatePrudentialAdjustmentController } from './interfaces/controllers/prudential/prudential-adjustment/iterminate-prudential-adjustment-controller';
// import { TerminatePrudentialAdjustmentController } from '../controllers/prudential/prudential-adjustment/terminate-prudential-adjustment-controller';
// import { IMinimumCalendarDateController } from './interfaces/controllers/prudential/prudential-adjustment/iminimum-calendar-date-controller';
// import { MinimumCalendarDateController } from '../controllers/prudential/prudential-adjustment/minimum-calendar-date-controller';
// import { IParticipantYearWeekController } from './interfaces/controllers/prudential/payment-report/iparticipant-year-week-controller';
// import { ParticipantYearWeekController } from '../controllers/prudential/payment-report/participant-year-week-controller';
// import { IPaymentReportDataLayer } from './interfaces/data-layers/prudential/payment-report/ipayment-report-data-layer';
// import { PaymentReportDataLayer } from '../data-layers/prudential/payment-report/payment-report-data-layer';
// import { IGetPaymentRecieptReportDataController } from './interfaces/controllers/prudential/payment-report/iget-payment-reciept-report-data-controller';
// import { GetPaymentRecieptReportDataController } from '../controllers/prudential/payment-report/get-payment-reciept-report-data-controller';
// import { IPaymentInterestReportController } from './interfaces/controllers/prudential/payment-report/ipayment-interest-report-controller';
// import { PaymentInterestReportController } from '../controllers/prudential/payment-report/payment-interest-report-controller';
// import { IInsertPrudentialAdjustmentController } from './interfaces/controllers/prudential/prudential-adjustment/iinsert-prudential-adjustment-controller';
// import { IStatusForPrudentialAdjustmentController } from './interfaces/controllers/prudential/prudential-adjustment/istatus-for-prudential-adjustment-controller';
// import { InsertPrudentialAdjustmentController } from '../controllers/prudential/prudential-adjustment/insert-prudential-adjusment-controller';
// import { StatusForPrudentialAdjustmentController } from '../controllers/prudential/prudential-adjustment/status-prudential-adjusment-controller';
// import { VFAvgPriceCalculationModule } from '../data-layers/prudential/new-prudential-standard/maximum-credit-limit/vf-hh-profile-average-rrp-calculation/vf-calculation-using-db';
// import { GetCrDbReallocationGraphDataController } from '../controllers/prudential/new-prudential-standard/maximum-credit-limit/energy-pattern/get-cr-db-reallocation-graph-data-controller';
// import { IGetCrDbReallocationGraphDataController } from './interfaces/controllers/prudential/maximum-credit-limit/energy-pattern/iget-cr-db-reallocation-graph-data-controller';

// import { ICalculateBusinessDayController } from './interfaces/controllers/prudential/prudential-review-standard/new-review/icalculate-business-day-controller';
// import { CalculateBusinessDayController } from '../controllers/prudential/prudential-review-standard/new-review/calculate-business-day-controller';
// import { ISDBSCRReallocationGraphDataController } from './interfaces/controllers/prudential/maximum-credit-limit/energy-pattern/isdb-scr-reallocation-graph-data-controller';
// import { GetSDBSCRReallocationGraphDataController } from '../controllers/prudential/new-prudential-standard/maximum-credit-limit/energy-pattern/sdb-scr-reallocation-graph-data-controller';
// import { GetCDBCap1CCRCap1ReallocationGraphDataController } from '../controllers/prudential/new-prudential-standard/maximum-credit-limit/energy-pattern/cdbcap1-ccrcap1-reallocation-graph-data-controller';
// import { ICDBCap1CCRCap1CDBCap2CCRCap2CDBCap3CCRCap3ReallocationGraphDataController } from './interfaces/controllers/prudential/maximum-credit-limit/energy-pattern/icdbcap1-ccrcap1-cdbcap2-ccrcap2-cdbcap3-ccrcap3-reallocation-graph-data-controller';
// import { IPrafLoadGenerationGraphController } from './interfaces/controllers/prudential/new-prudential-standard/maximun-credit-limit/praf-analysis/ipraf-load-generation-graph-controller';
// import { IPrafDBCRReallocationGraphController } from './interfaces/controllers/prudential/new-prudential-standard/maximun-credit-limit/praf-analysis/ipraf-db-cr-reallocation-graph-controller';
// // tslint:disable-next-line:max-line-length
// import { IPrafSwapDBCRReallocationGraphController } from './interfaces/controllers/prudential/new-prudential-standard/maximun-credit-limit/praf-analysis/ipraf-swap-db-cr-reallocation-graph-controller';
// import { IPrafDBCap1DBCap2DBCap3CRCap1CRCap2CRCap3ReallocationGraphController } from './interfaces/controllers/prudential/new-prudential-standard/maximun-credit-limit/praf-analysis/ipraf-dbcap1-dbcap2-dbcap3-crcap1-crcap2-crcap3-reallocation-graph-controller';
// import { PrafDBCap1DBCap2DBCap3CRCap1CRCap2CRCap3ReallocationGraphController } from '../controllers/prudential/new-prudential-standard/maximum-credit-limit/praf-analysis/praf-dbcap1-dbcap2-dbcap3-crcap1-crcap2-crcap3-reallocation-graph-controller';
// import { PrafLoadGenerationGraphController } from '../controllers/prudential/new-prudential-standard/maximum-credit-limit/praf-analysis/praf-load-generation-graph-controller';
// import { PrafDBCRReallocationGraphController } from '../controllers/prudential/new-prudential-standard/maximum-credit-limit/praf-analysis/praf-db-cr-reallocation-graph-controller';
// import { PrafSwapDBCRReallocationGraphController } from '../controllers/prudential/new-prudential-standard/maximum-credit-limit/praf-analysis/praf-swap-db-cr-reallocation-graph-controller';
// import { DeleteEnergyPatternController } from '../controllers/prudential/new-prudential-standard/maximum-credit-limit/energy-pattern/delete-energy-pattern';
// import { SaveEnergyPatternController } from '../controllers/prudential/new-prudential-standard/maximum-credit-limit/energy-pattern/save-energy-patter-controller';
// import { IDeleteEnergyPatternController } from './interfaces/controllers/prudential/maximum-credit-limit/energy-pattern/idelete-energy-pattern-data-controller';
// import { ISaveEnergyPatternController } from './interfaces/controllers/prudential/maximum-credit-limit/energy-pattern/isave-energy-pattern-controller';
// import { ICopiedDataController } from './interfaces/controllers/prudential/maximum-credit-limit/energy-pattern/icopied-data-conntroller';
// import { CopiedDataController } from '../controllers/prudential/new-prudential-standard/maximum-credit-limit/energy-pattern/copied-data-controller';
// import { IPrafResultsSummaryController } from './interfaces/controllers/prudential/new-prudential-standard/maximun-credit-limit/praf-analysis/ipraf-results-summary-controller';
// import { IPrafAnalysisDetailsResultsController } from './interfaces/controllers/prudential/new-prudential-standard/maximun-credit-limit/praf-analysis/ipraf-analysis-details-results-controller';
// import { PrafResultsSummaryController } from '../controllers/prudential/new-prudential-standard/maximum-credit-limit/praf-analysis/praf-results-summary-controller';
// import { PrafAnalysisDetailsResultsController } from '../controllers/prudential/new-prudential-standard/maximum-credit-limit/praf-analysis/praf-analysis-details-results-controller';
// import { CopiedCompanyDataController } from '../controllers/prudential/new-prudential-standard/maximum-credit-limit/energy-pattern/copied-company-data-controller';
// import { ICopiedCompanyDataController } from './interfaces/controllers/prudential/maximum-credit-limit/energy-pattern/icopied-company-data-controller';
// import { IDraftMCLDataLayer } from './interfaces/data-layers/prudential/new-prudential-standard/maximum-credit-limit/draft-mcl/idraft-mcl-data-layer';
// import { IDraftMCLReportController } from './interfaces/controllers/prudential/new-prudential-standard/maximun-credit-limit/draft-mcl/reports/idraft-mcl-report-controller';
// import { IDraftExceptionsReportController } from './interfaces/controllers/prudential/new-prudential-standard/maximun-credit-limit/draft-mcl/reports/idraft-exceptions-report-controller';
// import { IDraftLetterCSVReportController } from './interfaces/controllers/prudential/new-prudential-standard/maximun-credit-limit/draft-mcl/reports/idraft-letter-csv-report-controller';
// import { IDraftMemoCSVReportController } from './interfaces/controllers/prudential/new-prudential-standard/maximun-credit-limit/draft-mcl/reports/idraft-memo-csv-report-controller';
// import { IDraftWebsitesCSVReportController } from './interfaces/controllers/prudential/new-prudential-standard/maximun-credit-limit/draft-mcl/reports/idraft-websites-csv-report-controller';
// import { DraftMCLDataLayer } from '../data-layers/prudential/new-prudential-standard/maximum-credit-limit/draft-mcl/draft-mcl-data-layer';
// import { DraftMCLReportController } from '../controllers/prudential/new-prudential-standard/maximum-credit-limit/draft-mcl/reports/draft-mcl-report-controller';
// import { DraftExceptionsReportController } from '../controllers/prudential/new-prudential-standard/maximum-credit-limit/draft-mcl/reports/draft-exceptions-report-controller';
// import { DraftLetterCSVReportController } from '../controllers/prudential/new-prudential-standard/maximum-credit-limit/draft-mcl/reports/draft-letter-csv-report-controller';
// import { DraftMemoCSVReportController } from '../controllers/prudential/new-prudential-standard/maximum-credit-limit/draft-mcl/reports/draft-memo-csv-report-controller';
// import { DraftWebsitesCSVReportController } from '../controllers/prudential/new-prudential-standard/maximum-credit-limit/draft-mcl/reports/draft-websites-csv-report-controller';
// import { DraftCountFromBatchJobController } from '../controllers/prudential/new-prudential-standard/maximum-credit-limit/draft-mcl/draft-count-from-batch-job-controller';
// import { IDraftCountFromBatchJobController } from './interfaces/controllers/prudential/new-prudential-standard/maximun-credit-limit/draft-mcl/idraft-count-from-batch-job-controller';
// import { DraftAuthorisationCountController } from '../controllers/prudential/new-prudential-standard/maximum-credit-limit/draft-mcl/draft-authorisation-count-controller';
// import { IDraftAuthorisationCountController } from './interfaces/controllers/prudential/new-prudential-standard/maximun-credit-limit/draft-mcl/idraft-authorisation-count-controller';
// import { DraftMCLAuthorisationInsertUpdateController } from '../controllers/prudential/new-prudential-standard/maximum-credit-limit/draft-mcl/draft-mcl-authorisation-insert-update-controller';
// import { IDraftMCLAuthorisationInsertUpdateController } from './interfaces/controllers/prudential/new-prudential-standard/maximun-credit-limit/draft-mcl/idraft-mcl-authorisation-insert-update-controller';
// import { IDraftLoadExceptionsController } from './interfaces/controllers/prudential/new-prudential-standard/maximun-credit-limit/draft-mcl/exception/idraft-load-exceptions-controllers';
// import { DraftLoadExceptionsController } from '../controllers/prudential/new-prudential-standard/maximum-credit-limit/draft-mcl/exception/draft-load-exceptions-controllers';
// import { IDraftCurrentExceptionsController } from './interfaces/controllers/prudential/new-prudential-standard/maximun-credit-limit/draft-mcl/exception/Idraft-current-exceptions.controllers';
// import { DraftCurrentExceptionsController } from '../controllers/prudential/new-prudential-standard/maximum-credit-limit/draft-mcl/exception/draft-current-exceptions-controllers';
// import { IDraftSaveExceptionsController } from './interfaces/controllers/prudential/new-prudential-standard/maximun-credit-limit/draft-mcl/exception/idraft-save-exceptions-controller';
// import { DraftSaveExceptionsController } from '../controllers/prudential/new-prudential-standard/maximum-credit-limit/draft-mcl/exception/draft-save-exceptions-controllers';
// import { ResetReviewController } from '../controllers/prudential/new-prudential-standard/maximum-credit-limit/draft-mcl/reset-review/reset-review-controller';
// import { IResetReviewController } from './interfaces/controllers/prudential/new-prudential-standard/maximun-credit-limit/draft-analysis/ireset-review-controller';
// import { IDraftMCLReviewDataController } from './interfaces/controllers/prudential/new-prudential-standard/maximun-credit-limit/draft-mcl/review-data/idraft-mcl-review-data-controller';
// import { DraftMCLReviewDataController } from '../controllers/prudential/new-prudential-standard/maximum-credit-limit/draft-mcl/review-data/draft-mcl-review-data-controller';
// import { IDraftMclReviewCompareDataController } from './interfaces/controllers/prudential/new-prudential-standard/maximun-credit-limit/draft-mcl/review-compare-data/idraft-mcl-review-compare-data-controller';
// import { DraftMclReviewCompareDataController } from '../controllers/prudential/new-prudential-standard/maximum-credit-limit/draft-mcl/review-compare-data/draft-mcl-review-compare-data-controller';
// import { IDraftMCLUpdateEffectiveDateController } from './interfaces/controllers/prudential/new-prudential-standard/maximun-credit-limit/draft-mcl/update-effective-date/idraft-mcl-update-effective-date-controller';
// import { DraftMCLUpdateEffectiveDateController } from '../controllers/prudential/new-prudential-standard/maximum-credit-limit/draft-mcl/update-effective-date/draft-mcl-update-effective-date-controller';
// import { IDraftCheckBoxAuthorizedController } from './interfaces/controllers/prudential/new-prudential-standard/maximun-credit-limit/draft-mcl/check-box-authorized/idraft-mcl-check-box-authorized-data-controller';
// import {
//   DraftCheckBoxAuthorizedController
// } from '../controllers/prudential/new-prudential-standard/maximum-credit-limit/draft-mcl/check-box-authorized/draft-mcl-check-box-authorized-data-controller';
// import { ISavePrafController } from './interfaces/controllers/prudential/new-prudential-standard/maximun-credit-limit/praf-analysis/isave-praf-controller';
// import { SavePrafController } from '../controllers/prudential/new-prudential-standard/maximum-credit-limit/praf-analysis/save-praf-controller';
// import { IGetPrafReportDataController } from './interfaces/controllers/prudential/new-prudential-standard/maximun-credit-limit/praf-analysis/iget-praf-report-data-controller';
// import { GetPrafReportDataController } from '../controllers/prudential/new-prudential-standard/maximum-credit-limit/praf-analysis/get-praf-report-data-controller';
// import { DeletePrafController } from '../controllers/prudential/new-prudential-standard/maximum-credit-limit/praf-analysis/delete-praf-data-controller';
// import { IDeletePrafController } from './interfaces/controllers/prudential/new-prudential-standard/maximun-credit-limit/praf-analysis/idelete-praf-data-controller';
// import { IPrafSummaryCompanyLevelDataController } from './interfaces/controllers/prudential/new-prudential-standard/maximun-credit-limit/praf-analysis/ipraf-summary-company-level-data-controller';
// import { PrafSummaryCompanyLevelDataController } from '../controllers/prudential/new-prudential-standard/maximum-credit-limit/praf-analysis/praf-summary-company-level-data-controller';
// import { IPrafCalculatedController } from './interfaces/controllers/prudential/maximum-credit-limit/energy-pattern/ipraf-calculated-controller';
// import { PrafCalculatedController } from '../controllers/prudential/new-prudential-standard/maximum-credit-limit/praf-analysis/praf-calculated-controller';
// import { IPrafBatchJobCountController } from './interfaces/controllers/prudential/maximum-credit-limit/energy-pattern/ipraf-batch-job-count-controller';
// import { PrafBatchJobCountController } from '../controllers/prudential/new-prudential-standard/maximum-credit-limit/praf-analysis/praf-batch-job-count-controller';
// import { IUpdateCalculationUptoDateController } from './interfaces/controllers/prudential/prudential-review-standard/home/iupdate-calculation-upto-date-controller';
// import { UpdateCalculationUptoDateController } from '../controllers/prudential/prudential-review-standard/home/update-calculation-upto-date-controller';
// import { RecalculatePrafCountController } from '../controllers/prudential/new-prudential-standard/maximum-credit-limit/praf-analysis/recalculate-praf-count-controller';
// import { IRecalculatePrafCountController } from './interfaces/controllers/prudential/maximum-credit-limit/energy-pattern/irecalculate-praf-count-controller';
// import { IFinalMCLReportController } from './interfaces/controllers/prudential/new-prudential-standard/maximun-credit-limit/final-mcl/reports/ifinal-mcl-report-controller';
// import { FinalMCLReportController } from '../controllers/prudential/new-prudential-standard/maximum-credit-limit/final-mcl/reports/final-mcl-report-controllers';
// import { IFinalMCLDataLayer } from './interfaces/data-layers/prudential/new-prudential-standard/maximum-credit-limit/final-mcl/ifinal-mcl-data-layer';
// import { FinalMCLDataLayer } from '../data-layers/prudential/new-prudential-standard/maximum-credit-limit/final-mcl/final-mcl-data-layer';
// import { IFinalMCLCommitController } from './interfaces/controllers/prudential/new-prudential-standard/maximun-credit-limit/final-mcl/ifinal-mcl-commit-controller';
// import { FinalMCLCommitController } from '../controllers/prudential/new-prudential-standard/maximum-credit-limit/final-mcl/final-mcl-commit-controllers';
// import { IFinalMCLGridDataController } from './interfaces/controllers/prudential/new-prudential-standard/maximun-credit-limit/final-mcl/ifinal-mcl-grid-data-controller';
// import { FinalMCLGridDataController } from '../controllers/prudential/new-prudential-standard/maximum-credit-limit/final-mcl/final-mcl-grid-data-controller';
// import { IDraftAdjustPrafController } from './interfaces/controllers/prudential/new-prudential-standard/maximun-credit-limit/draft-mcl/adjust-praf/idraft-mcl-adjust-praf';
// import { DraftAdjustPrafController } from '../controllers/prudential/new-prudential-standard/maximum-credit-limit/draft-mcl/adjust-praf/adjust-praf-controller';
// import { IGetSavedEPDataForPrafController } from './interfaces/controllers/prudential/new-prudential-standard/maximun-credit-limit/praf-analysis/iget-saved-ep-data-for-praf-controller';
// import { GetSavedEPDataForPrafController } from '../controllers/prudential/new-prudential-standard/maximum-credit-limit/praf-analysis/get-saved-ep-data-for-praf-controller';
// import { IUpdateDraftMclController } from './interfaces/controllers/prudential/new-prudential-standard/maximun-credit-limit/draft-mcl/iupdate-draft-mcl.controller';
// import { UpdateDraftMclController } from '../controllers/prudential/new-prudential-standard/maximum-credit-limit/draft-mcl/update-draft-mcl-controller';
// import { IDraftCalculationController } from './interfaces/controllers/prudential/new-prudential-standard/maximun-credit-limit/draft-mcl/draft-calculation/idraft-calculation-controller';
// import { DraftCalculationController } from '../controllers/prudential/new-prudential-standard/maximum-credit-limit/draft-mcl/draft-calculation/draft-calculation-controller';
// import { IPrafCalculationController } from './interfaces/controllers/prudential/new-prudential-standard/maximun-credit-limit/praf-analysis/ipraf-calculation-controller';
// import { PrafCalculationController } from '../controllers/prudential/new-prudential-standard/maximum-credit-limit/praf-analysis/praf-calculation-controller';
// import { IGetParticipantOriginalInterestRateController } from './interfaces/controllers/prudential/payment-tracking/iget-original-participant-interest-rate-controller';
// import { GetParticipantOriginalInterestRateController } from '../controllers/prudential/payment-tracking/get-original-participant-interest-rate-controller';
// import { ISavePrudentialActionLogController } from './interfaces/controllers/prudential/prudential-action-log/isave-prudential-action-log-controller';
// import { SavePrudentialActionLogController } from '../controllers/prudential/prudential-action-log/save-prudential-action-log-controller';
// import { IBreachedIconPrudentialActionLogController } from './interfaces/controllers/prudential/prudential-action-log/ibreached-icon-controller';
// import { BreachedIconPrudentialActionLogController } from '../controllers/prudential/prudential-action-log/breached-icon-controller';
// import { IPageLoadGridDataController } from './interfaces/controllers/prudential/prudential-action-log/ipage-load-grid-data-controller';
// import { PageLoadGridDataController } from '../controllers/prudential/prudential-action-log/page-load-grid-controller';
// import { GetCDBCap2CCRCap2ReallocationGraphDataController } from '../controllers/prudential/new-prudential-standard/maximum-credit-limit/energy-pattern/cdbcap2-ccrcap2-reallocation-graph-data-controller';
// import { GetCDBCap3CCRCap3ReallocationGraphDataController } from '../controllers/prudential/new-prudential-standard/maximum-credit-limit/energy-pattern/cdbcap3-ccrcap3-reallocation-graph-data-controller';
// import { GetDcrDdbReallocationGraphDataController } from '../controllers/prudential/new-prudential-standard/maximum-credit-limit/energy-pattern/get-dcr-ddb-reallocation-graph-data-controller';
// import { IGetDcrDdbReallocationGraphDataController } from './interfaces/controllers/prudential/maximum-credit-limit/energy-pattern/iget-dcr-ddb-reallocation-grph-data-controller';
// import { ISaveStatementNoteController } from './interfaces/controllers/settlement/statement- note/isave-statement-note-controller';
// import { IStatementNoteDataLayer } from './interfaces/data-layers/settlement/statement-note/istatement-note-data-layer';
// import { StatementNoteDataLayer } from '../data-layers/settlement/statement-note/statement-note-data-layer';
// import { SaveStatementNoteController } from '../controllers/settlement/statement-note/save-statement-note-controller';
// import { SecurityDepositDataLayer } from '../data-layers/prudential/security-deposit/security-deposit-data-layer';
// import { ISecurityDepositDataLayer } from './interfaces/data-layers/prudential/security-deposit/isecurity-deposit-data-layer';
// import { IManualBillingDescriptionDataLayer } from './interfaces/data-layers/settlement/manual-billing-description/imanual-billing-description-data-layer';
// import { ManualBillingDescriptionDataLayer } from '../data-layers/settlement/manual-billing-description/manual-billing-description-data-layer';
// import { IManualBillingDescriptionGridDataController } from './interfaces/controllers/settlement/manual-billing-description/imanual-billing-description-grid-data-controller';
// import { ManualBillingDescriptionGridDataController } from '../controllers/settlement/manual-billing-description/manual-billing-description-grid-data-controller';
// import { IManualBillingDescriptionDeleteController } from './interfaces/controllers/settlement/manual-billing-description/imanual-billing-description-delete-controller';
// import { ManualBillingDescriptionDeleteController } from '../controllers/settlement/manual-billing-description/manual-billing-description-delete-controller';
// import { IBasClassDropdownController } from './interfaces/controllers/settlement/manual-billing-description/ibas-class-dropdown-controller';
// import { BasClassDropdownController } from '../controllers/settlement/manual-billing-description/bas-class-dropdown.controller';
// import { IManualBillingDescriptionModifyController } from './interfaces/controllers/settlement/manual-billing-description/imanual-billing-description-modify-controller';
// import { ManualBillingDescriptionModifyController } from '../controllers/settlement/manual-billing-description/manual-biling-description-modify-controller';
// import { ManualBillingDescriptionNewCloneController } from '../controllers/settlement/manual-billing-description/manual-billing-description-new-clone-controller';
// import { IManualBillingDescriptionNewCloneController } from './interfaces/controllers/settlement/manual-billing-description/imanual-billing-description-new-clone-controller';
// import { IAdjustPrafBatchJobCountController } from './interfaces/controllers/prudential/maximum-credit-limit/energy-pattern/iadjust-praf-batch-job-count-controller';
// import { AdjustPrafBatchJobCountController } from '../controllers/prudential/new-prudential-standard/maximum-credit-limit/praf-analysis/adjust-praf-batch-job-count-controller';
// import { DirectionEntryGridDataController } from '../controllers/settlement/direction-entry/direction-entry-grid-data-controller';
// import { IDirectionEntryDataLayer } from './interfaces/data-layers/settlement/direction-entry/idirection-entry-data-layer';
// import { DirectionEntryDataLayer } from '../data-layers/settlement/direction-entry/direction-entry-data-layer';
// import { IProvisionalParticipantListController } from './interfaces/controllers/settlement/direction-entry/iprovisional-participant-list-controller';
// import { ProvisionalParticipantListController } from '../controllers/settlement/direction-entry/provisional-participant-list-controller';
// import { IGetStatementNoteDetailsController } from './interfaces/controllers/settlement/statement- note/iget-statement-note-details-controller';
// import { GetStatementNoteDetailsController } from '../controllers/settlement/statement-note/get-statement-note-details-controller';
// import { CheckRevisionDataController } from '../controllers/settlement/direction-entry/check-revision-data-controller';
// import { ICheckRevisionDataController } from './interfaces/controllers/settlement/direction-entry/icheck-revision-data-controller';
// import { DeleteUnauthorisedProvisionalDirectionEntryController } from '../controllers/settlement/direction-entry/delete-unauthorised-provisional-direction-entry-controller';
// import { IDeleteUnauthorisedProvisionalDirectionEntryController } from './interfaces/controllers/settlement/direction-entry/idelete-unauthorised-provisional-direction-entry-controller';
// import { CountAuthoriseFinalDirectionController } from '../controllers/settlement/direction-entry/count-authorise-final-direction-controller';
// import { ICountAuthoriseFinalDirectionController } from './interfaces/controllers/settlement/direction-entry/icount-authorise-Final-direction-controller';
// import { ICheckForDuplcateDataController } from './interfaces/controllers/settlement/direction-entry/icheck-for-duplicate-data-controller';
// import { CheckForDuplcateDataController } from '../controllers/settlement/direction-entry/check-for-duplicate-data-controller';
// import { IGetBillingCalendarInfoController } from './interfaces/controllers/settlement/direction-entry/iget-billing-calendar-info-controller';
// import { GetBillingCalendarInfoController } from '../controllers/settlement/direction-entry/get-billing-calendar-info-controller';
// import { ILoadRegionBenefitFactorsController } from './interfaces/controllers/settlement/direction-entry/iload-region-benefit-factors-controller';
// import { LoadRegionBenefitFactorsController } from '../controllers/settlement/direction-entry/load-region-benefit-factors-controller';
// import { IProvAuthoriseDirectionEntryController } from './interfaces/controllers/settlement/direction-entry/iprov-authorise-direction-entry-controller';
// import { ProvAuthoriseDirectionEntryController } from '../controllers/settlement/direction-entry/prov-authorise-direction-entry-controller';
// import { IFinalAuthoriseDirectionEntryController } from './interfaces/controllers/settlement/direction-entry/iFinal-authorise-direction-entry-controller';
// import { FinalAuthoriseDirectionEntryController } from '../controllers/settlement/direction-entry/final-authorise-direction-entry-controller';
// import { SelectProvisionalIDController } from '../controllers/settlement/direction-entry/select-provisional-id-controller';
// import { ISelectProvisionalIDController } from './interfaces/controllers/settlement/direction-entry/iselect-provisional-id-controller';
// import { IGetProvParticipantsDataController } from './interfaces/controllers/settlement/direction-entry/iget-prov-participants-data-controller';
// import { GetProvParticipantsDataController } from '../controllers/settlement/direction-entry/get-prov-participants-data-controller';
// import { IGetFinalParticipantsDataController } from './interfaces/controllers/settlement/direction-entry/iget-final-participants-data-controller';
// import { GetFinalParticipantsDataController } from '../controllers/settlement/direction-entry/get-final-participants-data-controller';
// import { ISaveDirectionDataController } from './interfaces/controllers/settlement/direction-entry/isave-direction-entry-controller';
// import { SaveDirectionDataController } from '../controllers/settlement/direction-entry/save-direction-entry-controller';
// import { GetDirectionTypeController } from '../controllers/settlement/direction-entry/get-direction-type-controller';
// import { IGetDirectionTypeController } from './interfaces/controllers/settlement/direction-entry/iget-direction-type-controller';
// import { IGetDirectionServiceController } from './interfaces/controllers/settlement/direction-entry/iget-direction-service-controller';
// import { GetDirectionServiceController } from '../controllers/settlement/direction-entry/get-direction-service-controller';
// import { IMCLRegisterCompanyListController } from './interfaces/controllers/prudential/mcl-register/icompany-list-controller';
// import { MCLRegisterCompanyListController } from '../controllers/prudential/mcl-register/company-list-controller';
// import { IMCLRegisterDataLayer } from './interfaces/data-layers/prudential/mcl-register/imcl-register-data-layer';
// import { MCLRegisterDataLayer } from '../data-layers/prudential/mcl-register/mcl-register-data-layer';
// import { SavePrudentialDetailVersionController } from '../controllers/prudential/mcl-register/save-prudential-detail-version-controller';
// import { ISavePrudentialDetailVersionController } from './interfaces/controllers/prudential/mcl-register/isave-prudential-detail-version-controller';
// import { EFTDataLayer } from '../data-layers/settlement/eft/eft-data-layer';
// import { IEFTDataLayer } from './interfaces/data-layers/settlement/eft/ieft-data-layer';
// import { EFTPaymentController } from '../controllers/settlement/eft/eft-payment-controller';
// import { IEFTPaymentController } from './interfaces/controllers/settlement/eft/ieft-payment-controller';
// import { GetEftMakeupGridDataController } from '../controllers/settlement/eft/get-eft-makeup-grid-data-controller';
// import { IGetEftMakeupGridDataController } from './interfaces/controllers/settlement/eft/iget-eft-makeup-grid-data-controller';
// import { IEFTShortFallController } from './interfaces/controllers/settlement/eft/ieft-shortFall-controller';
// import { EFTShortFallController } from '../controllers/settlement/eft/eft-shortfall-controller';
// import { IRevisionInterestRateController } from './interfaces/controllers/prudential/maintain-view/input-interest-rate/irevision-interest-rate-controller';
// import { RevisionInterestRateController } from '../controllers/prudential/maintain-view/input-interest-rate/revision-interest-rate-controller';
// import { IEFTMakeupController } from './interfaces/controllers/settlement/eft/ieft-makeup-controller';
// import { EFTMakeupController } from '../controllers/settlement/eft/eft-makeup-controller';
// import { IDeleteInterestRateController } from './interfaces/controllers/prudential/maintain-view/input-interest-rate/idelete-interest-rate-controller';
// import { DeleteInterestRateController } from '../controllers/prudential/maintain-view/input-interest-rate/delete-interest-rate-controller';
// import { IGetEftMakeupEnableDisableDataController } from './interfaces/controllers/settlement/eft/iget-eft-makeup-enable-disable-data-controller';
// import { GetEftMakeupEnableDisableDataController } from '../controllers/settlement/eft/get-eft-makeup-enable-disable-data-controller';
// import { InterestReportDataController } from '../controllers/prudential/maintain-view/input-interest-rate/interest-report-data-controller';
// import { IInterestReportDataController } from './interfaces/controllers/prudential/maintain-view/input-interest-rate/iinterest-report-data-controller';
// import { IGetEftLatestYearWeekDataController } from './interfaces/controllers/settlement/eft/iget-eft-latest-year-week-data-controller';
// import { GetEftLatestYearWeekDataController } from '../controllers/settlement/eft/get-eft-makeup-latest-year-week-data-controller';
// import { SaveInterestRateController } from '../controllers/prudential/maintain-view/input-interest-rate/save-interest-rate-controller';
// import { ISaveInterestRateController } from './interfaces/controllers/prudential/maintain-view/input-interest-rate/isave-interest-rate-controller';
// import { IEFTMakeupCalcController } from './interfaces/controllers/settlement/eft/ieft-makeup-calc-controller';
// import { EFTMakeupCalcController } from '../controllers/settlement/eft/eft-makeup-calc-controller';
// import { IMarketNoticeGridDataController } from './interfaces/controllers/settlement/market-notice/imarket-notice-grid-data-controller';
// import { MarketNoticeGridDataController } from '../controllers/settlement/market-notice/market-notice-grid-data-controller';
// import { IMarketNoticeDataLayer } from './interfaces/data-layers/settlement/market-notice/imarket-notice-data-layer';
// import { MarketNoticeDataLayer } from '../data-layers/settlement/market-notice/market-notice-data-layer';
// import { ApcClaimAddEditDetailsController } from '../controllers/settlement/apc-claim/apc-claim-add-edit-details-controller';
// import { IApcClaimAddEditDetailsController } from './interfaces/controllers/settlement/apc-claim/iapc-claim-add-edit-controller';
// import { ApcClaimDataLayer } from '../data-layers/settlement/apc-claim/apc-claim-data-layer';
// import { IApcClaimDataLayer } from './interfaces/data-layers/settlement/apc-claim/iapc-claim-data-layer';
// import { IApcClaimHomeDataController } from './interfaces/controllers/settlement/apc-claim/iapc-claim-home-data-controller';
// import { ApcClaimHomeDataController } from '../controllers/settlement/apc-claim/apc-claim-home-data-controller';
// import { MarketNoticeTypeController } from '../controllers/settlement/market-notice/market-notice-type-controller';
// import { IMarketNoticeTypeController } from './interfaces/controllers/settlement/market-notice/imarket-notice-type-controller';
// import { IApcClaimDeleteController } from './interfaces/controllers/settlement/apc-claim/iapc-claim-delete-controller';
// import { ApcClaimDeleteController } from '../controllers/settlement/apc-claim/apc-claim-delete-controller';
// import { MarketNoticeParticipantDataController } from '../controllers/settlement/market-notice/market-notice-participant-data-controller';
// import { IMarketNoticeParticipantDataController } from './interfaces/controllers/settlement/market-notice/imarket-notice-participant-data-controller';
// import { PCOReportController } from '../controllers/prudential/pco-report/pco-report-controller';
// import { IPCOReportController } from './interfaces/controllers/prudential/pco-report/ipco-report-controller';
// import { IPCOReportDataLayer } from './interfaces/data-layers/prudential/pco-report/ipco-report-data-layer';
// import { PCOReportDataLayer } from '../data-layers/prudential/pco-report/pco-report-data-layer';
// import { ISendPCOReportController } from './interfaces/controllers/prudential/pco-report/isend-pco-report-controller';
// import { SendPcoReportController } from '../controllers/prudential/pco-report/send-pco-report-controller';
// import { IApcClaimAuthoriseController } from './interfaces/controllers/settlement/apc-claim/iapc-claim-authorise-controller';
// import { ApcClaimAuthoriseController } from '../controllers/settlement/apc-claim/apc-claim-authorise-controller';
// import { ApcClaimIntervalLengthController } from '../controllers/settlement/apc-claim/apc-claim-interval-length-controller';
// import { IApcClaimIntervalLengthController } from './interfaces/controllers/settlement/apc-claim/iapc-claim-interval-length-controller';
// import { ApcClaimIdController } from '../controllers/settlement/apc-claim/apc-claim-id-controller';
// import { IApcClaimIdController } from './interfaces/controllers/settlement/apc-claim/iapc-claim-id-controller';
// import { ISaveApcController } from './interfaces/controllers/settlement/apc-claim/isave-apc-controller';
// import { SaveApcController } from '../controllers/settlement/apc-claim/save-apc-controller';
// import { ApcClaimValidationDataController } from '../controllers/settlement/apc-claim/apc-claim-validation-data-controller';
// import { IApcClaimValidationDataController } from './interfaces/controllers/settlement/apc-claim/iapc-claim-validation-data-controller';
// import { BillingConfigurationHomeDataController } from '../controllers/prudential/maintain-view/billing-reassignment-configuration/billing-configuration-home-data-controller';
// import { IBillingReassignmentConfigurationDataLayer } from './interfaces/data-layers/prudential/maintain-view/ibilling-reassignment-configuration-data-layer';
// import { BillingReassignmentConfigurationDataLayer } from '../data-layers/prudential/maintain-view/billing-reassignment-configuration-data-layer';
// import { AddEditBillingConfigurationController } from '../controllers/prudential/maintain-view/billing-reassignment-configuration/add-edit-billing-configuration-controller';
// import { IAddEditBillingConfigurationController } from './interfaces/controllers/prudential/maintain-view/billing-reassignment-configuration/iadd-edit-billing-configuration-controller';
// import { IGetAgeingLetterCommentsController } from './interfaces/controllers/prudential/guarantee-registration/ageing/iget-ageing-comments-controller';
// import { IDeleteGuaranteeRegistrationDataDataController } from './interfaces/controllers/prudential/guarantee-registration/home/idelete-guarantee-registration-data-controller';
// import { IGetGuaranteeRegistrationHomeDataController } from './interfaces/controllers/prudential/guarantee-registration/home/iget-guarantee-registration-home-data-controller';
// import { IGetGuaranteeRegistrationHomeAgeingDataController } from './interfaces/controllers/prudential/guarantee-registration/home/iget-guarantee-registration-home-ageing-data-controller';
// import { ICreditProviderPageloadController } from './interfaces/controllers/prudential/guarantee-registration/credit-provider/icredit-provider-pageload-controller';
// import { IGetGuaranteeRegistrationReportController } from './interfaces/controllers/prudential/guarantee-registration/home/iget-guarantee-registration-report-controller';
// import { IGetGuaranteeAddOptionsController } from './interfaces/controllers/prudential/guarantee-registration/create/iget-guarantee-add-options-controller';
// import { IAuthoriseAgeingLetterController } from './interfaces/controllers/prudential/guarantee-registration/ageing/iauthorise-ageing-letter-controller';
// import { ICreditProviderLatestController } from './interfaces/controllers/prudential/guarantee-registration/credit-provider/icredit-provider-latest-controller';
// import { ICreateRegistrationController } from './interfaces/controllers/prudential/guarantee-registration/create/icreate-guarantee-controller';
// import { ICreditProviderSaveController } from './interfaces/controllers/prudential/guarantee-registration/credit-provider/icredit-provider-save-controller';
// import { IGuaranteeRegistrationDataLayer } from './interfaces/data-layers/prudential/guarantee-registration/guarantee-registration-data-layer';
// import { GuaranteeRegistrationDataLayer } from '../data-layers/prudential/guarantee-registration/guarantee-registration-data-layer';
// import { GetAgeingLetterCommentsController } from '../controllers/prudential/guarantee-registration/ageing/get-ageing-letter-comments-controller';
// import { DeleteGuaranteeRegistrationDataController } from '../controllers/prudential/guarantee-registration/ageing/home/delete-guarantee-registration-data-controller';
// import { GetGuaranteeRegistrationHomeDataController } from '../controllers/prudential/guarantee-registration/ageing/home/get-guarantee-registration-home-data-controller';
// import { GetGuaranteeRegistrationHomeAgeingDataController } from '../controllers/prudential/guarantee-registration/ageing/home/get-guarantee-registration-home-ageing-data-controller';
// import { CreditProviderPageloadController } from '../controllers/prudential/guarantee-registration/credit-provider-review/credit-provider-pageload-controller';
// import { GetGuaranteeRegistrationReportController } from '../controllers/prudential/guarantee-registration/ageing/home/get-guarantee-registration-report-controller';
// import { GetGuaranteeAddOptionsController } from '../controllers/prudential/guarantee-registration/create/get-guarantee-add-options-controller';
// import { AuthoriseAgeingLetterController } from '../controllers/prudential/guarantee-registration/ageing/authorise-ageing-letter-controller';
// import { CreditProviderLatestController } from '../controllers/prudential/guarantee-registration/credit-provider-review/credit-provider-latest-controller';
// import { CreateGuaranteeController } from '../controllers/prudential/guarantee-registration/create/create-guarantee-controller';
// import { CreditProviderSaveController } from '../controllers/prudential/guarantee-registration/credit-provider-review/credit-provider-save-controller';
// import { IResetReturnController } from './interfaces/controllers/prudential/guarantee-registration/ageing/ireset-return-controller';
// import { ResetReturnController } from '../controllers/prudential/guarantee-registration/ageing/reset-return-controller';
// import { ReturnController } from '../controllers/prudential/guarantee-registration/ageing/return-controller';
// import { IReturnController } from './interfaces/controllers/prudential/guarantee-registration/ageing/ireturn-controller';
// import { ICreditProviderReportController } from './interfaces/controllers/prudential/guarantee-registration/credit-provider/icredit-provider-report-controller';
// import { CreditProviderReportController } from '../controllers/prudential/guarantee-registration/credit-provider-review/credit-provider-report-controller';
// import { IYearWeekSecurityDepositProvisionReportController } from './interfaces/controllers/prudential/security-deposit/provision-reports/iyear-week-security-deposit-provision-report-controller';
// import { YearWeekSecurityDepositProvisionReportController } from '../controllers/prudential/security-deposit/provision-reports/year-week-security-deposit-provision-report-controller';
// import { ISecurityDepositReportDataController } from './interfaces/controllers/prudential/security-deposit/provision-reports/isecurty-deposit-report-data-controller';
// import { SecurityDepositReportDataController } from '../controllers/prudential/security-deposit/provision-reports/securty-deposit-report-data-controller';
// import { SecurityDepositGridDataController } from '../controllers/prudential/security-deposit/home-page/security-deposit-grid-data-controller';
// import { ISecurityDepositGridDataController } from './interfaces/controllers/prudential/security-deposit/home-page/isecurity-deposit-grid-data-controller';
// import { SecurityDepositProvisionDeleteController } from '../controllers/prudential/security-deposit/home-page/security-deposit-provision-delete-controller';
// import { ISecurityDepositProvisionDeleteController } from './interfaces/controllers/prudential/security-deposit/home-page/isecurity-deposit-provision-delete-controller';
// import { ISecurityDepositProvisionPageLoadController } from './interfaces/controllers/prudential/security-deposit/provision/isecurity-deposit-provision-pageload-controller';
// import { SecurityDepositProvisionPageLoadController } from '../controllers/prudential/security-deposit/provision/security-deposit-provision-pageload-controller';
// import { ISecurityDepositProvisionEarlyMaturityController } from './interfaces/controllers/prudential/security-deposit/home-page/isecurity-deposit-provision-early-maturity-controller';
// import { SecurityDepositProvisionEarlyMaturityController } from '../controllers/prudential/security-deposit/home-page/security-deposit-provision-early-maturity-controller';
// import { ProvisionUpdateInsertEarlyMaturityController } from '../controllers/prudential/security-deposit/home-page/provison-update-insert-early-maturity-controller';
// import { IProvisionUpdateInsertEarlyMaturityController } from './interfaces/controllers/prudential/security-deposit/home-page/iprovision-update-insert-early-maturity-controller';
// import { IProvisionOnChangeParticipantIDController } from './interfaces/controllers/prudential/security-deposit/provision/iprovision-on-change-participantid-controller';
// import { ProvisionOnChangeParticipantIDController } from '../controllers/prudential/security-deposit/provision/provision-on-change-participantid-controller';
// import { IProvisionViewButtonController } from './interfaces/controllers/prudential/security-deposit/provision/iprovision-view-button-controller';
// import { ProvisionViewButtonController } from '../controllers/prudential/security-deposit/provision/provision-view-button-controller';
// import { IProvisionAuthoriseController } from './interfaces/controllers/prudential/security-deposit/provision/iprovision-authorise-controller';
// import { ProvisionAuthoriseController } from '../controllers/prudential/security-deposit/provision/provision-authorise-controller';
// import { IDirectionEntryGridDataController } from './interfaces/controllers/settlement/direction-entry/idirection-entry-grid-data-controller';
// import { IApplicationPageLoadController } from './interfaces/controllers/prudential/security-deposit/application/iapplication-pageload-controller';
// import { ApplicationPageLoadController } from '../controllers/prudential/security-deposit/application/application-pageload-controller';
// import { IUpdateApplicationAmountController } from './interfaces/controllers/prudential/security-deposit/application/iupdate-application-amount-controller';
// import { UpdateApplicationAmountController } from '../controllers/prudential/security-deposit/application/update-application-amount-controller';
// import { AuthoriseApplicationController } from '../controllers/prudential/security-deposit/application/authorise-application-controller';
// import { IAuthoriseApplicationController } from './interfaces/controllers/prudential/security-deposit/application/iauthorise-application-controller';
// import { IFixedInterestUpdateController } from './interfaces/controllers/prudential/security-deposit/home-page/ifixed-interest-update-controller';
// import { FixedInterestUpdateController } from '../controllers/prudential/security-deposit/home-page/fixed-interest-update-controller';
// import { IGetInterestRateGridDataController } from './interfaces/controllers/prudential/security-deposit/interest-rate/iget-interest-rate-grid-data';
// import { GetInterestRateGridDataController } from '../controllers/prudential/security-deposit/interest-rate/get-interest-rate-grid-data-controller';
// import { IGetInterestAccountGridDataController } from './interfaces/controllers/prudential/security-deposit/interest-account/iget-interest-account-grid-data';
// import { InterestAccountGridDataController } from '../controllers/prudential/security-deposit/interest-account/get-interest-account-grid-data-controller';
// import { IBillingConfigurationHomeDataController } from './interfaces/controllers/prudential/maintain-view/billing-reassignment-configuration/ibilling-configuration-home-data-controller';
// import { IGetInterestRateAccountIDController } from './interfaces/controllers/prudential/security-deposit/interest-rate/iget-interest-rate-accountid-controller';
// import { GetInterestRateAccountIDController } from '../controllers/prudential/security-deposit/interest-rate/get-interest-rate-accountid-controller';
// import { AuthoriseInterestRateController } from '../controllers/prudential/security-deposit/interest-rate/authorise-interest-rate-controller';
// import { IAuthoriseInterestRateController } from './interfaces/controllers/prudential/security-deposit/interest-rate/iauthorise-interest-rate-controller';
// import { IDeleteInterestAccountGridDataController } from './interfaces/controllers/prudential/security-deposit/interest-account/idelete-interest-account-grid-data';
// import { DeleteInterestAccountController } from '../controllers/prudential/security-deposit/interest-account/delete-interest-account-controller';
// import { IAuthoriseInterestAccountDataController } from './interfaces/controllers/prudential/security-deposit/interest-account/iauthorise-interest-account-data';
// import { AuthoriseInterestAccountDataController } from '../controllers/prudential/security-deposit/interest-account/authorise-interest-account-controller';
// import { IInputInterestRateDataLayer } from './interfaces/data-layers/prudential/maintain-view/iinput-interest-rate-data-layer';
// import { InputInterestRateDataLayer } from '../data-layers/prudential/maintain-view/input-interest-rate-data-layer';

const container = new Container();

container.bind<IDbManager>(IOCTYPES.DbManager)
  .to(DbManager);
container.bind<IHelloDataLayer>(IOCTYPES.HelloDataLayer)
  .to(HelloDataLayer);
// container.bind<IPostDataLayer>(IOCTYPES.PostDataLayer)
//   .to(PostDataLayer);
// container.bind<IHomeDataLayer>(IOCTYPES.HomeDataLayer)
//   .to(HomeDataLayer);
// container.bind<IPaymentDataLayer>(IOCTYPES.PaymentDataLayer)
//   .to(PaymentDataLayer);
// container.bind<INewReviewDataLayer>(IOCTYPES.NewReviewDataLayer)
//   .to(NewReviewDataLayer);
container.bind<IHelloController>(IOCTYPES.HelloController)
  .to(HelloController);
// container.bind<IReviewDetailsController>(IOCTYPES.ReviewDetailsController)
//   .to(ReviewDetailsController);
// container.bind<ICompanyDetailsController>(IOCTYPES.CompanyDetailsController)
//   .to(CompanyDetailsController);
// container.bind<ITerminateReviewController>(IOCTYPES.TerminateReviewController)
//   .to(TerminateReviewController);
// container.bind<ICalculationUptoDateController>(IOCTYPES.CalculationUpToDateController)
//   .to(CalculationUptoDateController);
// container.bind<ICompletedReviewDetailsController>(IOCTYPES.CompletedReviewDetailsController)
//   .to(CompletedReviewDetailsController);
// container.bind<ISelectScheduleDetailsController>(IOCTYPES.SelectScheduleDetailsController)
//   .to(SelectScheduleDetailsController);
// container.bind<ISettlementRunDataLayer>(IOCTYPES.SettlementRunDataLayer)
//   .to(SettlementRunDataLayer);
// container.bind<IAuthoriseSettlementRunController>(IOCTYPES.AuthoriseSettlementRunController)
//   .to(AuthoriseSettlementRunController);
// container.bind<IRefreshSettlementRunController>(IOCTYPES.RefreshSettlementRunController)
//   .to(RefreshSettlementRunController);
// container.bind<ISettlementRunController>(IOCTYPES.SettlementRunController)
//   .to(SettlementRunController);
// container.bind<ISaveReviewDetailsController>(IOCTYPES.SaveReviewDetailsController)
//   .to(SaveReviewDetailsController);
// container.bind<IBillRunDataLayer>(IOCTYPES.BillRunDataLayer)
//   .to(BillRunDataLayer);
// container.bind<IGetStatusController>(IOCTYPES.GetStatusController)
//   .to(GetStatusController);
// container.bind<IGetGridDataController>(IOCTYPES.GetGridDataController)
//   .to(GetGridDataController);
// container.bind<IProceedStatusController>(IOCTYPES.ProceedStatusController)
//   .to(ProceedStatusController);
// container.bind<IMaintainScheduleDataLayer>(IOCTYPES.MaintainScheduleDataLayer)
//   .to(MaintainScheduleDataLayer);
// container.bind<IGetMaintainScheduleDataController>(IOCTYPES.GetMaintaincheduleDataController)
//   .to(GetMaintainScheduleDataController);
// container.bind<ISettlementHomeController>(IOCTYPES.SettlementHomeController)
//   .to(SettlementHomeController);
// container.bind<ISettlementHomeDataLayer>(IOCTYPES.SettlementHomeDataLayer)
//   .to(SettlementHomeDataLayer);
// container.bind<IChangeParticipantDetailsController>(IOCTYPES.ChangeParticipantDetailsController)
//   .to(ChangeParticipantDetailsController);
// container.bind<IParticipantDetailsController>(IOCTYPES.ParticipantDetailsController)
//   .to(ParticipantDetailsController);
// container.bind<IYearWeekDetailsController>(IOCTYPES.YearWeekDetailsController)
//   .to(YearWeekDetailsController);
// container.bind<IPaymentMethodsController>(IOCTYPES.PaymentMethodsController)
//   .to(PaymentMethodsController);
// container.bind<IPaymentTypesController>(IOCTYPES.PaymentTypesController)
//   .to(PaymentTypesController);
// container.bind<IBillingWeekYearController>(IOCTYPES.BillingWeekYearController)
//   .to(BillingWeekYearController);
// container.bind<IPaymentNominationGridController>(IOCTYPES.PaymentNominationGridController)
//   .to(PaymentNominationGridController);
// container.bind<IAdjustDataLayer>(IOCTYPES.AdjustDataLayer)
//   .to(AdjustDataLayer);
// container.bind<IEnergyPatternDataLayer>(IOCTYPES.EnergyPatternDataLayer)
//   .to(EnergyPatternDataLayer);
// container.bind<IAdjustDataController>(IOCTYPES.AdjustDataController)
//   .to(AdjustDataController);
// container.bind<IProceedController>(IOCTYPES.ProceedController)
//   .to(ProceedController);
// container.bind<IAdjustImportController>(IOCTYPES.AdjustImportController)
//   .to(AdjustImportController);
// container.bind<IGetSeasonListController>(IOCTYPES.GetSeasonListController)
//   .to(GetSeasonListController);
// container.bind<IAddEditScheduleController>(IOCTYPES.AddEditScheduleController)
//   .to(AddEditScheduleController);
// container.bind<IProceedPostingOnNonPostingDayController>(IOCTYPES.ProceedPostingOnNonPostingDayController)
//   .to(ProceedPostingOnNonPostingDayController);
// container.bind<IBatchjobInsertionForPaymentRunningController>(IOCTYPES.BatchjobInsertionForPaymentRunningController)
//   .to(BatchjobInsertionForPaymentRunningController);
// container.bind<ICountFromBatchJobController>(IOCTYPES.CountFromBatchJobController)
//   .to(CountFromBatchJobController);
// container.bind<ICountFromExpectedPaymentController>(IOCTYPES.CountFromExpectedPaymentController)
//   .to(CountFromExpectedPaymentController);
// container.bind<IPostAuthorisationValidationController>(IOCTYPES.PostAuthorisationValidationController)
//   .to(PostAuthorisationValidationController);
// container.bind<IBatchJobInsertionForOtherRuntypeController>(IOCTYPES.BatchJobInsertionForOtherRuntypeController)
//   .to(BatchJobInsertionForOtherRuntypeController);
// container.bind<IBatchJobInsertionForPrelimRuntypeController>(IOCTYPES.BatchJobInsertionForPrelimRuntypeController)
//   .to(BatchJobInsertionForPrelimRuntypeController);
// container.bind<IUpdateBillingRunTrkController>(IOCTYPES.UpdateBillingRunTrkController)
//   .to(UpdateBillingRunTrkController);
// container.bind<IPreSelectWeekController>(IOCTYPES.PreSelectWeekController)
//   .to(PreSelectWeekController);
// container.bind<IPaymentNominationController>(IOCTYPES.PaymentNominationController)
//   .to(PaymentNominationController);
// container.bind<IInsertEventQueuePackageController>(IOCTYPES.InsertEventQueuePackageController)
//   .to(InsertEventQueuePackageController);
// container.bind<IDeleteMaintainScheduleController>(IOCTYPES.DeleteMaintainScheduleController)
//   .to(DeleteMaintainScheduleController);
// container.bind<IPaymentNominationAuthorityController>(IOCTYPES.PaymentNominationAuthorityController)
//   .to(PaymentNominationAuthorityController);
// container.bind<IParticipantEnergyPatternController>(IOCTYPES.ParticipantEnergyPatternController)
//   .to(ParticipantEnergyPatternController);
// container.bind<IAnalysisStatusController>(IOCTYPES.AnalysisStatusController)
//   .to(AnalysisStatusController);
// container.bind<IAnalyzedStatusDetailsController>(IOCTYPES.AnalyzedStatusDetailsController)
//   .to(AnalysisPendingStatusController);
// container.bind<IVfPercentileWfAdjustPriceController>(IOCTYPES.VfPercentileWfAdjustPriceController)
//   .to(VfPercentileWfAdjustPriceController);
// container.bind<IVfPercentileWfAdjustPriceDataLayer>(IOCTYPES.VfPercentileWfAdjustPriceDataLayer)
//   .to(VfPercentileWfAdjustPriceDataLayer);
// container.bind<ILikeSeasonController>(IOCTYPES.LikeSeasonController)
//   .to(LikeSeasonController);
// container.bind<IOverlapScheduleCountController>(IOCTYPES.OverlapScheduleCountController)
//   .to(OverlapScheduleCountController);
// container.bind<IPaymentTrackingHeaderDetailsController>(IOCTYPES.PaymentTrackingHeaderDetailsController)
//   .to(PaymentTrackingHeaderDetailsController);
// container.bind<IPaymentTrackingGridDataController>(IOCTYPES.PaymentTrackingGridDataController)
//   .to(PaymentTrackingGridDataController);
// container.bind<IPaymentTrackingDataLayer>(IOCTYPES.PaymentTrackingDataLayer)
//   .to(PaymentTrackingDataLayer);
// container.bind<IImportPaymentTrackingDataController>(IOCTYPES.ImportPaymentTrackingDataController)
//   .to(ImportPaymentTrackingDataController);
// container.bind<IBreadCrumbController>(IOCTYPES.BreadCrumbController)
//   .to(BreadCrumbController);
// container.bind<IBreadCrumbDataLayer>(IOCTYPES.BreadCrumbDataLayer)
//   .to(BreadCrumbDataLayer);
// container.bind<IPrafAnalysisController>(IOCTYPES.PrafAnalysisController)
//   .to(PrafAnalysisController);
// container.bind<IPrafAnalysisDataLayer>(IOCTYPES.PrafAnalysisDataLayer)
//   .to(PrafAnalysisDataLayer);
// container.bind<ILoadGenerationGraphController>(IOCTYPES.LoadGenerationGraphController)
//   .to(LoadGenerationGraphController);
// container.bind<IVFHHProfileAverageRRPController>(IOCTYPES.VFHHProfileAverageRRPController)
//   .to(VFHHProfileAverageRRPController);
// container.bind<IVFHHProfileAverageRRPDataLayer>(IOCTYPES.VFHHProfileAverageRRPDataLayer)
//   .to(VFHHProfileAverageRRPDataLayer);
// container.bind<IHistoricalReviewController>(IOCTYPES.HistoricalReviewController)
//   .to(HistoricalReviewController);
// container.bind<IVFReportController>(IOCTYPES.VFReportController)
//   .to(VFReportController);
// container.bind<ICheckDeleteInsertReviewsForVFAvgController>(IOCTYPES.CheckDeleteInsertReviewsForVFAvgController)
//   .to(CheckDeleteInsertReviewsForVFAvgController);
// container.bind<IAuthorizeVFAvgController>(IOCTYPES.AuthorizeVFAvgController)
//   .to(AuthorizeVFAvgController);
// container.bind<IWebsiteCSVReportController>(IOCTYPES.WebsiteCSVeportController)
//   .to(WebsiteCSVeportController);
// container.bind<IAvailableParticipantListController>(IOCTYPES.AvailableParticipantListController)
//   .to(AvailableParticipantListController);
// container.bind<IParticipantsDataLayer>(IOCTYPES.ParticipantsDataLayer)
//   .to(ParticipantsDataLayer);
// container.bind<IParticipantsForMclReviewController>(IOCTYPES.ParticipantsForMclReviewController)
//   .to(ParticipantsForMclReviewController);
// container.bind<ICalculateVFHHProfileAverageRRPController>(IOCTYPES.CalculateVFHHProfileAverageRRPController)
//   .to(CalculateVFHHProfileAverageRRPController);
// container.bind<IVFAvgPriceCalculationModule>(IOCTYPES.VFAvgPriceCalculationModule)
//   .to(VFAvgPriceCalculationModule);
// container.bind<IAnalysisDataController>(IOCTYPES.AnalysisDataController)
//   .to(AnalysisDataController);
// container.bind<IGetCompareReviewPrafSummaryController>(IOCTYPES.GetCompareReviewPrafSummaryController)
//   .to(GetCompareReviewPrafSummaryController);
// container.bind<IGetCompanyRegionMapByReviewController>(IOCTYPES.GetCompanyRegionMapByReviewController)
//   .to(GetCompanyRegionMapByReviewController);
// container.bind<IOperatingParticipantsController>(IOCTYPES.OperatingParticipantsController)
//   .to(OperatingParticipantsController);
// container.bind<ISaveParticipantsForMclReviewController>(IOCTYPES.SaveParticipantsForMclReviewController)
//   .to(SaveParticipantsForMclReviewController);
// container.bind<IUpdateReviewDetailsController>(IOCTYPES.UpdateReviewDetailsController)
//   .to(UpdateReviewDetailsController);
// container.bind<IPrudentialActionLogDataLayer>(IOCTYPES.PrudentialActionLogDataLayer)
//   .to(PrudentialActionLogDataLayer);
// container.bind<IPrudentialDateRunNumberController>(IOCTYPES.PrudentialDateRunNumberController)
//   .to(PrudentialDateRunNumberController);
// container.bind<IActionIdListController>(IOCTYPES.ActionIdListController)
//   .to(ActionIdListController);
// container.bind<ICompanyIdListController>(IOCTYPES.CompanyIdListController)
//   .to(CompanyIdListController);
// container.bind<ICheckVfCalculationStatusController>(IOCTYPES.CheckVfCalculationStatusController)
//   .to(CheckVfCalculationStatusController);
// container.bind<IAuthorisePrudentialActionLogController>(IOCTYPES.AuthorisePrudentialActionLogController)
//   .to(AuthorisePrudentialActionLogController);
// container.bind<ICompanyListController>(IOCTYPES.CompanyListController)
//   .to(CompanyListController);
// container.bind<IPrudentialAdjustmentListController>(IOCTYPES.PrudentialAdjustmentListController)
//   .to(PrudentialAdjustmentListController);
// container.bind<IPrudentialAdjustmentDataLayer>(IOCTYPES.PrudentialAdjustmentDataLayer)
//   .to(PrudentialAdjustmentDataLayer);
// container.bind<IBillingRunController>(IOCTYPES.BillingRunController)
//   .to(BillingRunController);
// container.bind<ITerminatePrudentialAdjustmentController>(IOCTYPES.TerminatePrudentialAdjustmentController)
//   .to(TerminatePrudentialAdjustmentController);
// container.bind<IMinimumCalendarDateController>(IOCTYPES.MinimumCalendarDateController)
//   .to(MinimumCalendarDateController);
// container.bind<IParticipantYearWeekController>(IOCTYPES.ParticipantYearWeekController)
//   .to(ParticipantYearWeekController);
// container.bind<IPaymentReportDataLayer>(IOCTYPES.PaymentReportDataLayer)
//   .to(PaymentReportDataLayer);
// container.bind<IGetPaymentRecieptReportDataController>(IOCTYPES.GetPaymentRecieptReportDataController)
//   .to(GetPaymentRecieptReportDataController);
// container.bind<IPaymentInterestReportController>(IOCTYPES.PaymentInterestReportController)
//   .to(PaymentInterestReportController);
// container.bind<IInsertPrudentialAdjustmentController>(IOCTYPES.InsertPrudentialAdjustmentController)
//   .to(InsertPrudentialAdjustmentController);
// container.bind<IStatusForPrudentialAdjustmentController>(IOCTYPES.StatusForPrudentialAdjustmentController)
//   .to(StatusForPrudentialAdjustmentController);
// container.bind<IGetCrDbReallocationGraphDataController>(IOCTYPES.GetCrDbReallocationGraphDataController)
//   .to(GetCrDbReallocationGraphDataController);
// container.bind<ICalculateBusinessDayController>(IOCTYPES.CalculateBusinessDayController)
//   .to(CalculateBusinessDayController);
// container.bind<ISDBSCRReallocationGraphDataController>(IOCTYPES.GetSDBSCRReallocationGraphDataController)
//   .to(GetSDBSCRReallocationGraphDataController);
// container.bind<ICDBCap1CCRCap1CDBCap2CCRCap2CDBCap3CCRCap3ReallocationGraphDataController>(
//   IOCTYPES.GetCDBCap1CCRCap1ReallocationGraphDataController
// ).to(GetCDBCap1CCRCap1ReallocationGraphDataController);
// container.bind<IDeleteEnergyPatternController>(IOCTYPES.DeleteEnergyPatternController)
//   .to(DeleteEnergyPatternController);
// container.bind<ISaveEnergyPatternController>(IOCTYPES.SaveEnergyPatternController)
//   .to(SaveEnergyPatternController);
// container.bind<ICopiedDataController>(IOCTYPES.CopiedDataController)
//   .to(CopiedDataController);
// container.bind<ICopiedCompanyDataController>(IOCTYPES.CopiedCompanyDataController)
//   .to(CopiedCompanyDataController);
// container.bind<IDeletePrafController>(IOCTYPES.DeletePrafController)
//   .to(DeletePrafController);
// container.bind<IPrafLoadGenerationGraphController>(IOCTYPES.PrafLoadGenerationGraphController)
//   .to(PrafLoadGenerationGraphController);
// container.bind<IPrafDBCRReallocationGraphController>(IOCTYPES.PrafDBCRReallocationGraphController)
//   .to(PrafDBCRReallocationGraphController);
// container.bind<IPrafSwapDBCRReallocationGraphController>(IOCTYPES.PrafSwapDBCRReallocationGraphController)
//   .to(PrafSwapDBCRReallocationGraphController);
// container.bind<IPrafDBCap1DBCap2DBCap3CRCap1CRCap2CRCap3ReallocationGraphController>(
//   IOCTYPES.PrafDBCap1DBCap2DBCap3CRCap1CRCap2CRCap3ReallocationGraphController
// ).to(PrafDBCap1DBCap2DBCap3CRCap1CRCap2CRCap3ReallocationGraphController);
// container.bind<IPrafResultsSummaryController>(IOCTYPES.PrafResultsSummaryController)
//   .to(PrafResultsSummaryController);
// container.bind<IPrafAnalysisDetailsResultsController>(IOCTYPES.PrafAnalysisDetailsResultsController)
//   .to(PrafAnalysisDetailsResultsController);
// container.bind<ISavePrafController>(IOCTYPES.SavePrafController)
//   .to(SavePrafController);
// container.bind<IGetPrafReportDataController>(IOCTYPES.GetPrafReportDataController)
//   .to(GetPrafReportDataController);
// container.bind<IPrafSummaryCompanyLevelDataController>(IOCTYPES.PrafSummaryCompanyLevelDataController)
//   .to(PrafSummaryCompanyLevelDataController);
// container.bind<IPrafCalculatedController>(IOCTYPES.PrafCalculatedController)
//   .to(PrafCalculatedController);
// container.bind<IPrafBatchJobCountController>(IOCTYPES.PrafBatchJobCountController)
//   .to(PrafBatchJobCountController);
// container.bind<IUpdateCalculationUptoDateController>(IOCTYPES.UpdateCalculationUptoDateController)
//   .to(UpdateCalculationUptoDateController);
// container.bind<IRecalculatePrafCountController>(IOCTYPES.RecalculatePrafCountController)
//   .to(RecalculatePrafCountController);
// container.bind<IFinalMCLDataLayer>(IOCTYPES.FinalMCLDataLayer)
//   .to(FinalMCLDataLayer);
// container.bind<IFinalMCLReportController>(IOCTYPES.FinalMCLReportController)
//   .to(FinalMCLReportController);
// container.bind<IFinalMCLCommitController>(IOCTYPES.FinalMCLCommitController)
//   .to(FinalMCLCommitController);
// container.bind<IFinalMCLGridDataController>(IOCTYPES.FinalMCLGridDataController)
//   .to(FinalMCLGridDataController);
// container.bind<IDraftMCLDataLayer>(IOCTYPES.DraftMCLDataLayer)
//   .to(DraftMCLDataLayer);
// container.bind<IDraftMCLReportController>(IOCTYPES.DraftMCLReportController)
//   .to(DraftMCLReportController);
// container.bind<IDraftExceptionsReportController>(IOCTYPES.DraftExceptionsReportController)
//   .to(DraftExceptionsReportController);
// container.bind<IDraftLetterCSVReportController>(IOCTYPES.DraftLetterCSVReportController)
//   .to(DraftLetterCSVReportController);
// container.bind<IDraftMemoCSVReportController>(IOCTYPES.DraftMemoCSVReportController)
//   .to(DraftMemoCSVReportController);
// container.bind<IDraftWebsitesCSVReportController>(IOCTYPES.DraftWebsitesCSVReportController)
//   .to(DraftWebsitesCSVReportController);
// container.bind<IDraftCountFromBatchJobController>(IOCTYPES.DraftCountFromBatchJobController)
//   .to(DraftCountFromBatchJobController);
// container.bind<IDraftAuthorisationCountController>(IOCTYPES.DraftAuthorisationCountController)
//   .to(DraftAuthorisationCountController);
// container.bind<IDraftMCLAuthorisationInsertUpdateController>(IOCTYPES.DraftMCLAuthorisationInsertUpdateController)
//   .to(DraftMCLAuthorisationInsertUpdateController);
// container.bind<IDraftLoadExceptionsController>(IOCTYPES.DraftLoadExceptionsController)
//   .to(DraftLoadExceptionsController);
// container.bind<IDraftCurrentExceptionsController>(IOCTYPES.DraftCurrentExceptionsController)
//   .to(DraftCurrentExceptionsController);
// container.bind<IDraftSaveExceptionsController>(IOCTYPES.DraftSaveExceptionsController)
//   .to(DraftSaveExceptionsController);
// container.bind<IResetReviewController>(IOCTYPES.ResetReviewController)
//   .to(ResetReviewController);
// container.bind<IDraftMCLReviewDataController>(IOCTYPES.DraftMCLReviewDataController)
//   .to(DraftMCLReviewDataController);
// container.bind<IDraftMclReviewCompareDataController>(IOCTYPES.DraftMclReviewCompareDataController)
//   .to(DraftMclReviewCompareDataController);
// container.bind<IDraftMCLUpdateEffectiveDateController>(IOCTYPES.DraftMCLUpdateEffectiveDateController)
//   .to(DraftMCLUpdateEffectiveDateController);
// container.bind<IDraftCheckBoxAuthorizedController>(IOCTYPES.DraftCheckBoxAuthorizedController)
//   .to(DraftCheckBoxAuthorizedController);
// container.bind<IDraftAdjustPrafController>(IOCTYPES.DraftAdjustPrafController)
//   .to(DraftAdjustPrafController);
// container.bind<IGetSavedEPDataForPrafController>(IOCTYPES.GetSavedEPDataForPrafController)
//   .to(GetSavedEPDataForPrafController);
// container.bind<IUpdateDraftMclController>(IOCTYPES.UpdateDraftMclController)
//   .to(UpdateDraftMclController);
// container.bind<IDraftCalculationController>(IOCTYPES.DraftCalculationController)
//   .to(DraftCalculationController);
// container.bind<IPrafCalculationController>(IOCTYPES.PrafCalculationController)
//   .to(PrafCalculationController);
// container.bind<IGetParticipantOriginalInterestRateController>(IOCTYPES.GetParticipantOriginalInterestRateController)
//   .to(GetParticipantOriginalInterestRateController);
// container.bind<ISavePrudentialActionLogController>(IOCTYPES.SavePrudentialActionLogController)
//   .to(SavePrudentialActionLogController);
// container.bind<IBreachedIconPrudentialActionLogController>(IOCTYPES.BreachedIconPrudentialActionLogController)
//   .to(BreachedIconPrudentialActionLogController);
// container.bind<IPageLoadGridDataController>(IOCTYPES.PageLoadGridDataController)
//   .to(PageLoadGridDataController);
// // tslint:disable-next-line: max-line-length
// container.bind<ICDBCap1CCRCap1CDBCap2CCRCap2CDBCap3CCRCap3ReallocationGraphDataController>(IOCTYPES.GetCDBCap2CCRCap2ReallocationGraphDataController)
//   .to(GetCDBCap2CCRCap2ReallocationGraphDataController);
// // tslint:disable-next-line: max-line-length
// container.bind<ICDBCap1CCRCap1CDBCap2CCRCap2CDBCap3CCRCap3ReallocationGraphDataController>(IOCTYPES.GetCDBCap3CCRCap3ReallocationGraphDataController)
//   .to(GetCDBCap3CCRCap3ReallocationGraphDataController);
// container.bind<IGetDcrDdbReallocationGraphDataController>(IOCTYPES.GetDcrDdbReallocationGraphDataController)
//   .to(GetDcrDdbReallocationGraphDataController);
// container.bind<IStatementNoteDataLayer>(IOCTYPES.StatementNoteDataLayer)
//   .to(StatementNoteDataLayer);
// container.bind<ISaveStatementNoteController>(IOCTYPES.SaveStatementNoteController)
//   .to(SaveStatementNoteController);
// container.bind<ISecurityDepositDataLayer>(IOCTYPES.SecurityDepositDataLayer)
//   .to(SecurityDepositDataLayer);
// container.bind<IInputInterestRateDataLayer>(IOCTYPES.InputInterestRateDataLayer)
//   .to(InputInterestRateDataLayer);
// container.bind<IYearWeekSecurityDepositProvisionReportController>(IOCTYPES.YearWeekSecurityDepositProvisionReportController)
//   .to(YearWeekSecurityDepositProvisionReportController);
// container.bind<IManualBillingDescriptionDataLayer>(IOCTYPES.ManualBillingDescriptionDataLayer)
//   .to(ManualBillingDescriptionDataLayer);
// container.bind<IManualBillingDescriptionGridDataController>(IOCTYPES.ManualBillingDescriptionGridDataController)
//   .to(ManualBillingDescriptionGridDataController);
// container.bind<IManualBillingDescriptionDeleteController>(IOCTYPES.ManualBillingDescriptionDeleteController)
//   .to(ManualBillingDescriptionDeleteController);
// container.bind<IBasClassDropdownController>(IOCTYPES.BasClassDropdownController)
//   .to(BasClassDropdownController);
// container.bind<IManualBillingDescriptionModifyController>(IOCTYPES.ManualBillingDescriptionModifyController)
//   .to(ManualBillingDescriptionModifyController);
// container.bind<IManualBillingDescriptionNewCloneController>(IOCTYPES.ManualBillingDescriptionNewCloneController)
//   .to(ManualBillingDescriptionNewCloneController);
// container.bind<ISecurityDepositReportDataController>(IOCTYPES.SecurityDepositReportDataController)
//   .to(SecurityDepositReportDataController);
// container.bind<ISecurityDepositGridDataController>(IOCTYPES.SecurityDepositGridDataController)
//   .to(SecurityDepositGridDataController);
// container.bind<ISecurityDepositProvisionDeleteController>(IOCTYPES.SecurityDepositDeleteController)
//   .to(SecurityDepositProvisionDeleteController);
// container.bind<IAdjustPrafBatchJobCountController>(IOCTYPES.AdjustPrafBatchJobCountController)
//   .to(AdjustPrafBatchJobCountController);
// container.bind<ISecurityDepositProvisionDeleteController>(IOCTYPES.SecurityDepositProvisionDeleteController)
//   .to(SecurityDepositProvisionDeleteController);
// container.bind<ISecurityDepositProvisionPageLoadController>(IOCTYPES.SecurityDepositProvisionPageLoadController)
//   .to(SecurityDepositProvisionPageLoadController);
// container.bind<ISecurityDepositProvisionEarlyMaturityController>(IOCTYPES.SecurityDepositProvisionEarlyMaturityController)
//   .to(SecurityDepositProvisionEarlyMaturityController);
// container.bind<IProvisionUpdateInsertEarlyMaturityController>(IOCTYPES.ProvisionUpdateInsertEarlyMaturityController)
//   .to(ProvisionUpdateInsertEarlyMaturityController);
// container.bind<IProvisionOnChangeParticipantIDController>(IOCTYPES.ProvisionOnChangeParticipantIDController)
//   .to(ProvisionOnChangeParticipantIDController);
// container.bind<IProvisionViewButtonController>(IOCTYPES.ProvisionViewButtonController)
//   .to(ProvisionViewButtonController);
// container.bind<IProvisionAuthoriseController>(IOCTYPES.ProvisionAuthoriseController)
//   .to(ProvisionAuthoriseController);
// container.bind<IDirectionEntryGridDataController>(IOCTYPES.DirectionEntryGridDataController)
//   .to(DirectionEntryGridDataController);
// container.bind<IDirectionEntryDataLayer>(IOCTYPES.DirectionEntryDataLayer)
//   .to(DirectionEntryDataLayer);
// container.bind<IApplicationPageLoadController>(IOCTYPES.ApplicationPageLoadController)
//   .to(ApplicationPageLoadController);
// container.bind<IProvisionalParticipantListController>(IOCTYPES.ProvisionalParticipantListController)
//   .to(ProvisionalParticipantListController);
// container.bind<IGetStatementNoteDetailsController>(IOCTYPES.GetStatementNoteDetailsController)
//   .to(GetStatementNoteDetailsController);
// container.bind<ICheckRevisionDataController>(IOCTYPES.CheckRevisionDataController)
//   .to(CheckRevisionDataController);
// container.bind<ICheckForDuplcateDataController>(IOCTYPES.CheckForDuplcateDataController)
//   .to(CheckForDuplcateDataController);
// container.bind<IUpdateApplicationAmountController>(IOCTYPES.UpdateApplicationAmountController)
//   .to(UpdateApplicationAmountController);
// container.bind<IAuthoriseApplicationController>(IOCTYPES.AuthoriseApplicationController)
//   .to(AuthoriseApplicationController);
// container.bind<IDeleteUnauthorisedProvisionalDirectionEntryController>(
//   IOCTYPES.DeleteUnauthorisedProvisionalDirectionEntryController)
//   .to(DeleteUnauthorisedProvisionalDirectionEntryController);
// container.bind<ICountAuthoriseFinalDirectionController>(IOCTYPES.CountAuthoriseFinalDirectionController)
//   .to(CountAuthoriseFinalDirectionController);
// container.bind<IGetBillingCalendarInfoController>(IOCTYPES.GetBillingCalendarInfoController)
//   .to(GetBillingCalendarInfoController);
// container.bind<ILoadRegionBenefitFactorsController>(IOCTYPES.LoadRegionBenefitFactorsController)
//   .to(LoadRegionBenefitFactorsController);
// container.bind<IProvAuthoriseDirectionEntryController>(IOCTYPES.ProvAuthoriseDirectionEntryController)
//   .to(ProvAuthoriseDirectionEntryController);
// container.bind<IFinalAuthoriseDirectionEntryController>(IOCTYPES.FinalAuthoriseDirectionEntryController)
//   .to(FinalAuthoriseDirectionEntryController);
// container.bind<ISelectProvisionalIDController>(IOCTYPES.SelectProvisionalIDController)
//   .to(SelectProvisionalIDController);
// container.bind<IGetProvParticipantsDataController>(IOCTYPES.GetProvParticipantsDataController)
//   .to(GetProvParticipantsDataController);
// container.bind<IGetFinalParticipantsDataController>(IOCTYPES.GetFinalParticipantsDataController)
//   .to(GetFinalParticipantsDataController);
// container.bind<ISaveDirectionDataController>(IOCTYPES.SaveDirectionDataController)
//   .to(SaveDirectionDataController);
// container.bind<IGetDirectionTypeController>(IOCTYPES.GetDirectionTypeController)
//   .to(GetDirectionTypeController);
// container.bind<IGetDirectionServiceController>(IOCTYPES.GetDirectionServiceController)
//   .to(GetDirectionServiceController);
// container.bind<IMCLRegisterCompanyListController>(IOCTYPES.MCLRegisterCompanyListController)
//   .to(MCLRegisterCompanyListController);
// container.bind<IMCLRegisterDataLayer>(IOCTYPES.MCLRegisterDataLayer)
//   .to(MCLRegisterDataLayer);
// container.bind<ISavePrudentialDetailVersionController>(IOCTYPES.SavePrudentialDetailVersionController)
//   .to(SavePrudentialDetailVersionController);
// container.bind<IEFTDataLayer>(IOCTYPES.EFTDataLayer)
//   .to(EFTDataLayer);
// container.bind<IEFTPaymentController>(IOCTYPES.EFTPaymentController)
//   .to(EFTPaymentController);
// container.bind<IGetEftMakeupGridDataController>(IOCTYPES.GetEftMakeupGridDataController)
//   .to(GetEftMakeupGridDataController);
// container.bind<IEFTShortFallController>(IOCTYPES.EFTShortFallController)
//   .to(EFTShortFallController);
// container.bind<IRevisionInterestRateController>(IOCTYPES.RevisionInterestRateController)
//   .to(RevisionInterestRateController);
// container.bind<IEFTMakeupController>(IOCTYPES.EFTMakeupController)
//   .to(EFTMakeupController);
// container.bind<IDeleteInterestRateController>(IOCTYPES.DeleteInterestRateController)
//   .to(DeleteInterestRateController);
// container.bind<IGetEftMakeupEnableDisableDataController>(IOCTYPES.GetEftMakeupEnableDisableDataController)
//   .to(GetEftMakeupEnableDisableDataController);
// container.bind<IInterestReportDataController>(IOCTYPES.InterestReportDataController)
//   .to(InterestReportDataController);
// container.bind<IGetEftLatestYearWeekDataController>(IOCTYPES.GetEftLatestYearWeekDataController)
//   .to(GetEftLatestYearWeekDataController);
// container.bind<ISaveInterestRateController>(IOCTYPES.SaveInterestRateController)
//   .to(SaveInterestRateController);
// container.bind<IEFTMakeupCalcController>(IOCTYPES.EFTMakeupCalcController)
//   .to(EFTMakeupCalcController);
// container.bind<IMarketNoticeDataLayer>(IOCTYPES.MarketNoticeDataLayer)
//   .to(MarketNoticeDataLayer);
// container.bind<IMarketNoticeGridDataController>(IOCTYPES.MarketNoticeGridDataController)
//   .to(MarketNoticeGridDataController);
// container.bind<IApcClaimAddEditDetailsController>(IOCTYPES.ApcClaimAddEditDetailsController)
//   .to(ApcClaimAddEditDetailsController);
// container.bind<IApcClaimDataLayer>(IOCTYPES.ApcClaimDataLayer)
//   .to(ApcClaimDataLayer);
// container.bind<IApcClaimHomeDataController>(IOCTYPES.ApcClaimHomeDataController)
//   .to(ApcClaimHomeDataController);
// container.bind<IMarketNoticeTypeController>(IOCTYPES.MarketNoticeTypeController)
//   .to(MarketNoticeTypeController);
// container.bind<IApcClaimDeleteController>(IOCTYPES.ApcClaimDeleteController)
//   .to(ApcClaimDeleteController);
// container.bind<IMarketNoticeParticipantDataController>(IOCTYPES.MarketNoticeParticipantDataController)
//   .to(MarketNoticeParticipantDataController);
// container.bind<IPCOReportController>(IOCTYPES.PcoReportController)
//   .to(PCOReportController);
// container.bind<IPCOReportDataLayer>(IOCTYPES.PcoReportDataLayer)
//   .to(PCOReportDataLayer);
// container.bind<ISendPCOReportController>(IOCTYPES.SendPcoReportController)
//   .to(SendPcoReportController);
// container.bind<IApcClaimAuthoriseController>(IOCTYPES.ApcClaimAuthoriseController)
//   .to(ApcClaimAuthoriseController);
// container.bind<IApcClaimIntervalLengthController>(IOCTYPES.ApcClaimIntervalLengthController)
//   .to(ApcClaimIntervalLengthController);
// container.bind<IApcClaimIdController>(IOCTYPES.ApcClaimIdController)
//   .to(ApcClaimIdController);
// container.bind<ISaveApcController>(IOCTYPES.SaveApcController)
//   .to(SaveApcController);
// container.bind<IApcClaimValidationDataController>(IOCTYPES.ApcClaimValidationDataController)
//   .to(ApcClaimValidationDataController);
// container.bind<IFixedInterestUpdateController>(IOCTYPES.FixedInterestUpdateController)
//   .to(FixedInterestUpdateController);
// container.bind<IGetInterestRateGridDataController>(IOCTYPES.GetInterestRateGridDataController)
//   .to(GetInterestRateGridDataController);
// container.bind<IGetInterestAccountGridDataController>(IOCTYPES.InterestAccountGridDataController)
//   .to(InterestAccountGridDataController);
// container.bind<IBillingConfigurationHomeDataController>(IOCTYPES.BillingConfigurationHomeDataController)
//   .to(BillingConfigurationHomeDataController);
// container.bind<IBillingReassignmentConfigurationDataLayer>(IOCTYPES.BillingReassignmentConfigurationDataLayer)
//   .to(BillingReassignmentConfigurationDataLayer);
// container.bind<IGetInterestRateAccountIDController>(IOCTYPES.GetInterestRateAccountIDController)
//   .to(GetInterestRateAccountIDController);
// container.bind<IAuthoriseInterestRateController>(IOCTYPES.AuthoriseInterestRateController)
//   .to(AuthoriseInterestRateController);
// container.bind<IAddEditBillingConfigurationController>(IOCTYPES.AddEditBillingConfigurationController)
//   .to(AddEditBillingConfigurationController);
// container.bind<IDeleteInterestAccountGridDataController>(IOCTYPES.DeleteInterestAccountController)
//   .to(DeleteInterestAccountController);
// container.bind<IAuthoriseInterestAccountDataController>(IOCTYPES.AuthoriseInterestAccountDataController)
//   .to(AuthoriseInterestAccountDataController);
// container.bind<IGuaranteeRegistrationDataLayer>(IOCTYPES.GuaranteeRegistrationDataLayer)
//   .to(GuaranteeRegistrationDataLayer);
// container.bind<IGetAgeingLetterCommentsController>(IOCTYPES.GetAgeingLetterCommentsController)
//   .to(GetAgeingLetterCommentsController);
// container.bind<IDeleteGuaranteeRegistrationDataDataController>(IOCTYPES.DeleteGuaranteeRegistrationDataController)
//   .to(DeleteGuaranteeRegistrationDataController);
// container.bind<IGetGuaranteeRegistrationHomeDataController>(IOCTYPES.GetGuaranteeRegistrationHomeDataController)
//   .to(GetGuaranteeRegistrationHomeDataController);
// container.bind<IGetGuaranteeRegistrationHomeAgeingDataController>(IOCTYPES.GetGuaranteeRegistrationHomeAgeingDataController)
//   .to(GetGuaranteeRegistrationHomeAgeingDataController);
// container.bind<ICreditProviderPageloadController>(IOCTYPES.CreditProviderPageloadController)
//   .to(CreditProviderPageloadController);
// container.bind<IGetGuaranteeRegistrationReportController>(IOCTYPES.GetGuaranteeRegistrationReportController)
//   .to(GetGuaranteeRegistrationReportController);
// container.bind<IGetGuaranteeAddOptionsController>(IOCTYPES.GetGuaranteeAddOptionsController)
//   .to(GetGuaranteeAddOptionsController);
// container.bind<IAuthoriseAgeingLetterController>(IOCTYPES.AuthoriseAgeingLetterController)
//   .to(AuthoriseAgeingLetterController);
// container.bind<ICreditProviderLatestController>(IOCTYPES.CreditProviderLatestController)
//   .to(CreditProviderLatestController);
// container.bind<ICreateRegistrationController>(IOCTYPES.CreateGuaranteeController)
//   .to(CreateGuaranteeController);
// container.bind<ICreditProviderSaveController>(IOCTYPES.CreditProviderSaveController)
//   .to(CreditProviderSaveController);
// container.bind<IResetReturnController>(IOCTYPES.ResetReturnController)
//   .to(ResetReturnController);
// container.bind<IReturnController>(IOCTYPES.ReturnController)
//   .to(ReturnController);
// container.bind<ICreditProviderReportController>(IOCTYPES.CreditProviderReportController)
//   .to(CreditProviderReportController);



export { container };
