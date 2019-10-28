import { FunctionComponent, ElementType } from 'react'
import { KVO } from 'core/Types'
import CommandApproval from './command-approval.svg'
import CommandArtifactCheck from './command-artifact-check.svg'
import CommandBarrier from './command-barrier.svg'
import CommandCalendar from './command-calendar.svg'
import CommandEcho from './command-echo.svg'
import CommandEmail from './command-email.svg'
import CommandHttp from './command-http.svg'
import CommandInstall from './command-install.svg'
import CommandResourceConstraint from './command-resource-constraint.svg'
import CommandRollback from './command-rollback.svg'
import CommandShellScript from './command-shell-script.svg'
import CommandStart from './command-start.svg'
import CommandStop from './command-stop.svg'
import CommandSwap from './command-swap.svg'
import CommandSwitch from './command-switch.svg'
import CommandWinrm from './command-winrm.svg'
import DeploymentAbortedLegacy from './deployment-aborted-legacy.svg'
import DeploymentAbortedNew from './deployment-aborted-new.svg'
import DeploymentFailedLegacy from './deployment-failed-legacy.svg'
import DeploymentFailedNew from './deployment-failed-new.svg'
import DeploymentIncompleteLegacy from './deployment-incomplete-legacy.svg'
import DeploymentIncompleteNew from './deployment-incomplete-new.svg'
import DeploymentInprogressLegacy from './deployment-inprogress-legacy.svg'
import DeploymentInprogressNew from './deployment-inprogress-new.svg'
import DeploymentPausedLegacy from './deployment-paused-legacy.svg'
import DeploymentPausedNew from './deployment-paused-new.svg'
import DeploymentQueuedLegacy from './deployment-queued-legacy.svg'
import DeploymentQueuedNew from './deployment-queued-new.svg'
import DeploymentRejectedLegacy from './deployment-rejected-legacy.svg'
import DeploymentRejectedNew from './deployment-rejected-new.svg'
import DeploymentSuccessLegacy from './deployment-success-legacy.svg'
import DeploymentSuccessNew from './deployment-success-new.svg'
import DeploymentTimeoutLegacy from './deployment-timeout-legacy.svg'
import DeploymentTimeoutNew from './deployment-timeout-new.svg'
import Github from './github.svg'
import HarnessLogoBlack from './harness-logo-black.svg'
import HarnessLogoWhite from './harness-logo-white.svg'
import MainAbort from './main-abort.svg'
import MainAccountNotifications from './main-account-notifications.svg'
import MainAdd from './main-add.svg'
import MainApplications from './main-applications.svg'
import MainApply from './main-apply.svg'
import MainBaseline from './main-baseline.svg'
import MainCalendar from './main-calendar.svg'
import MainCanary from './main-canary.svg'
import MainCaretDown from './main-caret-down.svg'
import MainCaretLeft from './main-caret-left.svg'
import MainCaretRight from './main-caret-right.svg'
import MainCaretUp from './main-caret-up.svg'
import MainChangelog from './main-changelog.svg'
import MainChevronDown from './main-chevron-down.svg'
import MainChevronLeft from './main-chevron-left.svg'
import MainChevronRight from './main-chevron-right.svg'
import MainChevronUp from './main-chevron-up.svg'
import MainClone from './main-clone.svg'
import MainClose from './main-close.svg'
import MainCloudProviders from './main-cloud-providers.svg'
import MainCloud from './main-cloud.svg'
import MainCodeYaml from './main-code-yaml.svg'
import MainDashboard from './main-dashboard.svg'
import MainDelegates from './main-delegates.svg'
import MainDelete from './main-delete.svg'
import MainDepricate from './main-depricate.svg'
import MainDestroy from './main-destroy.svg'
import MainDownload from './main-download.svg'
import MainEdit from './main-edit.svg'
import MainEmail from './main-email.svg'
import MainEnvironments from './main-environments.svg'
import MainFeedback from './main-feedback.svg'
import MainFilter from './main-filter.svg'
import MainFlag from './main-flag.svg'
import MainFolderNew from './main-folder-new.svg'
import MainFolderOpen from './main-folder-open.svg'
import MainFolder from './main-folder.svg'
import MainFullscreen from './main-fullscreen.svg'
import MainHelp from './main-help.svg'
import MainInfo from './main-info.svg'
import MainInfrastructureProvisioners from './main-infrastructure-provisioners.svg'
import MainIssueFilled from './main-issue-filled.svg'
import MainIssue from './main-issue.svg'
import MainLike from './main-like.svg'
import MainLink from './main-link.svg'
import MainList from './main-list.svg'
import MainListenerUpdate from './main-listener-update.svg'
import MainLock from './main-lock.svg'
import MainMainZoomIn from './main-main-zoom_in.svg'
import MainMaximize from './main-maximize.svg'
import MainMinimize from './main-minimize.svg'
import MainMore from './main-more.svg'
import MainMove from './main-move.svg'
import MainNotes from './main-notes.svg'
import MainNotifications from './main-notifications.svg'
import MainPause from './main-pause.svg'
import MainPipelines from './main-pipelines.svg'
import MainPopularity from './main-popularity.svg'
import MainRefresh from './main-refresh.svg'
import MainReorder from './main-reorder.svg'
import MainRerun from './main-rerun.svg'
import MainRollback from './main-rollback.svg'
import MainSaved from './main-saved.svg'
import MainScope from './main-scope.svg'
import MainSearch from './main-search.svg'
import MainServiceAmi from './main-service-ami.svg'
import MainServices from './main-services.svg'
import MainSetup from './main-setup.svg'
import MainShare from './main-share.svg'
import MainStart from './main-start.svg'
import MainTags from './main-tags.svg'
import MainTemplateLibrary from './main-template-library.svg'
import MainThumbsdown from './main-thumbsdown.svg'
import MainThumbsup from './main-thumbsup.svg'
import MainTrash from './main-trash.svg'
import MainUnlock from './main-unlock.svg'
import MainUpload from './main-upload.svg'
import MainUserGroups from './main-user-groups.svg'
import MainUser from './main-user.svg'
import MainView from './main-view.svg'
import MainWarning from './main-warning.svg'
import MainWorkflows from './main-workflows.svg'
import MainZoomOut from './main-zoom-out.svg'
import SearchApplications from './search-applications.svg'
import SearchConnectors from './search-connectors.svg'
import SearchEnvironments from './search-environments.svg'
import SearchInfraProv from './search-infra-prov.svg'
import SearchPipelines from './search-pipelines.svg'
import SearchServices from './search-services.svg'
import SearchTips from './search-tips.svg'
import SearchTriggers from './search-triggers.svg'
import SearchUserGroups from './search-user-groups.svg'
import SearchUsers from './search-users.svg'
import SearchWorkflow from './search-workflow.svg'
import ServiceAppdynamics from './service-appdynamics.svg'
import ServiceArtifactory from './service-artifactory.svg'
import ServiceAwsCodeDeploy from './service-aws-code-deploy.svg'
import ServiceAwsLamda from './service-aws-lamda.svg'
import ServiceAws from './service-aws.svg'
import ServiceAzure from './service-azure.svg'
import ServiceBamboo from './service-bamboo.svg'
import ServiceBugsnag from './service-bugsnag.svg'
import ServiceCircleci from './service-circleci.svg'
import ServiceCloudformation from './service-cloudformation.svg'
import ServiceCloudwatch from './service-cloudwatch.svg'
import ServiceDatadog from './service-datadog.svg'
import ServiceDockerhub from './service-dockerhub.svg'
import ServiceDynatrace from './service-dynatrace.svg'
import ServiceEcs from './service-ecs.svg'
import ServiceElastigroup from './service-elastigroup.svg'
import ServiceElk from './service-elk.svg'
import ServiceGcp from './service-gcp.svg'
import ServiceGithub from './service-github.svg'
import ServiceGotlab from './service-gotlab.svg'
import ServiceHelm from './service-helm.svg'
import ServiceJenkins from './service-jenkins.svg'
import ServiceJira from './service-jira.svg'
import ServiceKubernetes from './service-kubernetes.svg'
import ServiceMydatacenter from './service-mydatacenter.svg'
import ServiceNewrelic from './service-newrelic.svg'
import ServiceNexus from './service-nexus.svg'
import ServiceOgz from './service-ogz.svg'
import ServicePagerduty from './service-pagerduty.svg'
import ServicePivotal from './service-pivotal.svg'
import ServicePrometheus from './service-prometheus.svg'
import ServiceServiceS from './service-service-s3.svg'
import ServiceServicenow from './service-servicenow.svg'
import ServiceSlack from './service-slack.svg'
import ServiceSplunk from './service-splunk.svg'
import ServiceSpotinst from './service-spotinst.svg'
import ServiceStackdriver from './service-stackdriver.svg'
import ServiceSumologic from './service-sumologic.svg'
import ServiceTerraform from './service-terraform.svg'
import SetupApi from './setup-api.svg'
import SetupTags from './setup-tags.svg'
import SupportAccount from './support-account.svg'
import SupportApi from './support-api.svg'
import SupportCode from './support-code.svg'
import SupportDashboard from './support-dashboard.svg'
import SupportDeployment from './support-deployment.svg'
import SupportGitops from './support-gitops.svg'
import SupportOnprem from './support-onprem.svg'
import SupportPipeline from './support-pipeline.svg'
import SupportSecurity from './support-security.svg'
import SupportStart from './support-start.svg'
import SupportTour from './support-tour.svg'
import SupportTroubleshoot from './support-troubleshoot.svg'
import SupportVerification from './support-verification.svg'
import SupportVideos from './support-videos.svg'
import TriggerArtifact from './trigger-artifact.svg'
import TriggerGithub from './trigger-github.svg'
import TriggerPipeline from './trigger-pipeline.svg'
import TriggerSchedule from './trigger-schedule.svg'

const HarnessIcons: KVO<FunctionComponent<ElementType>> = {
  'command-approval': CommandApproval,
  'command-artifact-check': CommandArtifactCheck,
  'command-barrier': CommandBarrier,
  'command-calendar': CommandCalendar,
  'command-echo': CommandEcho,
  'command-email': CommandEmail,
  'command-http': CommandHttp,
  'command-install': CommandInstall,
  'command-resource-constraint': CommandResourceConstraint,
  'command-rollback': CommandRollback,
  'command-shell-script': CommandShellScript,
  'command-start': CommandStart,
  'command-stop': CommandStop,
  'command-swap': CommandSwap,
  'command-switch': CommandSwitch,
  'command-winrm': CommandWinrm,
  'deployment-aborted-legacy': DeploymentAbortedLegacy,
  'deployment-aborted-new': DeploymentAbortedNew,
  'deployment-failed-legacy': DeploymentFailedLegacy,
  'deployment-failed-new': DeploymentFailedNew,
  'deployment-incomplete-legacy': DeploymentIncompleteLegacy,
  'deployment-incomplete-new': DeploymentIncompleteNew,
  'deployment-inprogress-legacy': DeploymentInprogressLegacy,
  'deployment-inprogress-new': DeploymentInprogressNew,
  'deployment-paused-legacy': DeploymentPausedLegacy,
  'deployment-paused-new': DeploymentPausedNew,
  'deployment-queued-legacy': DeploymentQueuedLegacy,
  'deployment-queued-new': DeploymentQueuedNew,
  'deployment-rejected-legacy': DeploymentRejectedLegacy,
  'deployment-rejected-new': DeploymentRejectedNew,
  'deployment-success-legacy': DeploymentSuccessLegacy,
  'deployment-success-new': DeploymentSuccessNew,
  'deployment-timeout-legacy': DeploymentTimeoutLegacy,
  'deployment-timeout-new': DeploymentTimeoutNew,
  github: Github,
  'harness-logo-black': HarnessLogoBlack,
  'harness-logo-white': HarnessLogoWhite,
  'main-abort': MainAbort,
  'main-account-notifications': MainAccountNotifications,
  'main-add': MainAdd,
  'main-applications': MainApplications,
  'main-apply': MainApply,
  'main-baseline': MainBaseline,
  'main-calendar': MainCalendar,
  'main-canary': MainCanary,
  'main-caret-down': MainCaretDown,
  'main-caret-left': MainCaretLeft,
  'main-caret-right': MainCaretRight,
  'main-caret-up': MainCaretUp,
  'main-changelog': MainChangelog,
  'main-chevron-down': MainChevronDown,
  'main-chevron-left': MainChevronLeft,
  'main-chevron-right': MainChevronRight,
  'main-chevron-up': MainChevronUp,
  'main-clone': MainClone,
  'main-close': MainClose,
  'main-cloud-providers': MainCloudProviders,
  'main-cloud': MainCloud,
  'main-code-yaml': MainCodeYaml,
  'main-dashboard': MainDashboard,
  'main-delegates': MainDelegates,
  'main-delete': MainDelete,
  'main-depricate': MainDepricate,
  'main-destroy': MainDestroy,
  'main-download': MainDownload,
  'main-edit': MainEdit,
  'main-email': MainEmail,
  'main-environments': MainEnvironments,
  'main-feedback': MainFeedback,
  'main-filter': MainFilter,
  'main-flag': MainFlag,
  'main-folder-new': MainFolderNew,
  'main-folder-open': MainFolderOpen,
  'main-folder': MainFolder,
  'main-fullscreen': MainFullscreen,
  'main-help': MainHelp,
  'main-info': MainInfo,
  'main-infrastructure-provisioners': MainInfrastructureProvisioners,
  'main-issue-filled': MainIssueFilled,
  'main-issue': MainIssue,
  'main-like': MainLike,
  'main-link': MainLink,
  'main-list': MainList,
  'main-listener-update': MainListenerUpdate,
  'main-lock': MainLock,
  'main-main-zoom_in': MainMainZoomIn,
  'main-maximize': MainMaximize,
  'main-minimize': MainMinimize,
  'main-more': MainMore,
  'main-move': MainMove,
  'main-notes': MainNotes,
  'main-notifications': MainNotifications,
  'main-pause': MainPause,
  'main-pipelines': MainPipelines,
  'main-popularity': MainPopularity,
  'main-refresh': MainRefresh,
  'main-reorder': MainReorder,
  'main-rerun': MainRerun,
  'main-rollback': MainRollback,
  'main-saved': MainSaved,
  'main-scope': MainScope,
  'main-search': MainSearch,
  'main-service-ami': MainServiceAmi,
  'main-services': MainServices,
  'main-setup': MainSetup,
  'main-share': MainShare,
  'main-start': MainStart,
  'main-tags': MainTags,
  'main-template-library': MainTemplateLibrary,
  'main-thumbsdown': MainThumbsdown,
  'main-thumbsup': MainThumbsup,
  'main-trash': MainTrash,
  'main-unlock': MainUnlock,
  'main-upload': MainUpload,
  'main-user-groups': MainUserGroups,
  'main-user': MainUser,
  'main-view': MainView,
  'main-warning': MainWarning,
  'main-workflows': MainWorkflows,
  'main-zoom-out': MainZoomOut,
  'search-applications': SearchApplications,
  'search-connectors': SearchConnectors,
  'search-environments': SearchEnvironments,
  'search-infra-prov': SearchInfraProv,
  'search-pipelines': SearchPipelines,
  'search-services': SearchServices,
  'search-tips': SearchTips,
  'search-triggers': SearchTriggers,
  'search-user-groups': SearchUserGroups,
  'search-users': SearchUsers,
  'search-workflow': SearchWorkflow,
  'service-appdynamics': ServiceAppdynamics,
  'service-artifactory': ServiceArtifactory,
  'service-aws-code-deploy': ServiceAwsCodeDeploy,
  'service-aws-lamda': ServiceAwsLamda,
  'service-aws': ServiceAws,
  'service-azure': ServiceAzure,
  'service-bamboo': ServiceBamboo,
  'service-bugsnag': ServiceBugsnag,
  'service-circleci': ServiceCircleci,
  'service-cloudformation': ServiceCloudformation,
  'service-cloudwatch': ServiceCloudwatch,
  'service-datadog': ServiceDatadog,
  'service-dockerhub': ServiceDockerhub,
  'service-dynatrace': ServiceDynatrace,
  'service-ecs': ServiceEcs,
  'service-elastigroup': ServiceElastigroup,
  'service-elk': ServiceElk,
  'service-gcp': ServiceGcp,
  'service-github': ServiceGithub,
  'service-gotlab': ServiceGotlab,
  'service-helm': ServiceHelm,
  'service-jenkins': ServiceJenkins,
  'service-jira': ServiceJira,
  'service-kubernetes': ServiceKubernetes,
  'service-mydatacenter': ServiceMydatacenter,
  'service-newrelic': ServiceNewrelic,
  'service-nexus': ServiceNexus,
  'service-ogz': ServiceOgz,
  'service-pagerduty': ServicePagerduty,
  'service-pivotal': ServicePivotal,
  'service-prometheus': ServicePrometheus,
  'service-service-s3': ServiceServiceS,
  'service-servicenow': ServiceServicenow,
  'service-slack': ServiceSlack,
  'service-splunk': ServiceSplunk,
  'service-spotinst': ServiceSpotinst,
  'service-stackdriver': ServiceStackdriver,
  'service-sumologic': ServiceSumologic,
  'service-terraform': ServiceTerraform,
  'setup-api': SetupApi,
  'setup-tags': SetupTags,
  'support-account': SupportAccount,
  'support-api': SupportApi,
  'support-code': SupportCode,
  'support-dashboard': SupportDashboard,
  'support-deployment': SupportDeployment,
  'support-gitops': SupportGitops,
  'support-onprem': SupportOnprem,
  'support-pipeline': SupportPipeline,
  'support-security': SupportSecurity,
  'support-start': SupportStart,
  'support-tour': SupportTour,
  'support-troubleshoot': SupportTroubleshoot,
  'support-verification': SupportVerification,
  'support-videos': SupportVideos,
  'trigger-artifact': TriggerArtifact,
  'trigger-github': TriggerGithub,
  'trigger-pipeline': TriggerPipeline,
  'trigger-schedule': TriggerSchedule
}

export { HarnessIcons }