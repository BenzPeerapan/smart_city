import Vue from 'vue'
import VueRouter from 'vue-router'
import PageAll from "@/view/PageAll";
//รับ - ส่งเอกสาร
import SetupDocument from "@/view/admin/receive_send_documents/setupdocument/SetupDocument";
import Login from "@/components/admin/login/Login";
import ListDocumentPending from "@/view/admin/receive_send_documents/list_of_documents_pending_review/ListDocumentPending";
import DetailListDocumentPending from "@/view/admin/receive_send_documents/list_of_documents_pending_review/DetailListDocumentPending";
import DetailListDocumentPendingCent from "@/view/admin/receive_send_documents/list_of_documents_pending_review/DetailListDocumentPendingCent";
// Population
import ComplaintsAboutProblems from "@/view/population/ComplaintsAboutProblems";
import ComplaintsStatistics from "@/view/population/ComplaintsStatistics";
// Dashboard
import OrganizationOverView from "@/view/admin/dashboard/organization/OrganizationOverView";
import PopulationServiceReport from "@/view/admin/dashboard/service_report/PopulationServiceReport";
import ReserveService from "@/view/population/ReserveService";
import ProfileManage from "@/view/admin/profile/ProfileManage";
// Project
import ProjectAll from "@/view/admin/project/project_all/ProjectAll";
import ProjectOverAll from "@/view/admin/project/project_all/ProjectOverAll";
import FileContentManage from "@/view/admin/file_contents/FileContentManage";
import ProjectReport from "@/view/admin/project/project_report/ProjectReport";
//การประชุม
import MeetingList from "@/view/admin/meeting/meeting_list/MeetingList";
import MeetingDetail from "@/view/admin/meeting/meeting_list/MeetingDetail";
import ActivitySchedule from "@/view/admin/meeting/activity_schedule/ActivitySchedule";
import ActivityScheduleDetail from "@/view/admin/meeting/activity_schedule/ActivityScheduleDetail";

Vue.use(VueRouter)

const routes = [
// Setup Page
    // before login
    {
        path: '/login',
        name: 'login',
        component: Login,
    },
    {
        path: '/complaints',
        name: 'complaints',
        component: ComplaintsAboutProblems,
    },
    {
        path: '/statistics',
        name: 'statistics',
        component: ComplaintsStatistics,
    },
    {
        path: '/reserveservice',
        name: 'reserveservice',
        component: ReserveService,
    },
    // after login url
    {
        path: '/',
        name: 'pageAll',
        component: PageAll,
        children: [
            {
                path: '/',
                name: 'organizationreport',
                component: OrganizationOverView
            },
            {
                path: '/populationreport',
                name: 'populationreport',
                component: PopulationServiceReport
            },
            //รับ-ส่งเอกสาร
            {
                path: '/setupdocument',
                name: 'setupdocument',
                component: SetupDocument
            },
            {
                path: '/listdocumentpeding',
                name: 'listdocumentpeding',
                component: ListDocumentPending
            },
            {
                path: '/detaillistdocumentpeding/:id',
                name: 'detaillistdocumentpeding',
                component: DetailListDocumentPending
            },
            {
                path: '/detaillistdocumentpedingcent/:id',
                name: 'detaillistdocumentpedingcent',
                component: DetailListDocumentPendingCent
            },
            {
                path: '/profilemanage',
                name: 'profilemanage',
                component: ProfileManage
            },
            //โครงการ
            {
              path: '/projectall',
              name: 'projectall',
              component: ProjectAll
            },
            {
              path: '/projectreport',
              name: 'projectreport',
              component: ProjectReport
            },
            {
                path: '/projectoverall/:id',
                name: 'projectoverall',
                component: ProjectOverAll
            },
            {
                path: '/filecontentmanage',
                name: 'filecontentmanage',
                component: FileContentManage
            },
            //การประชุม
            {
              path: '/meetinglist',
              name: 'meetinglist',
              component: MeetingList
            },
            {
              path: '/activityachedule',
              name: 'activityachedule',
              component: ActivitySchedule
            },
            {
              path: '/meetingdetail',
              name: 'meetingdetail',
              component: MeetingDetail
            },
            {
              path: '/activityacheduledetail',
              name: 'activityacheduledetail',
              component: ActivityScheduleDetail
            },
        ],
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
export default router
