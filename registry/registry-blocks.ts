export const blocks = [
  {
    name: "login-05",
    description: "A simple email-only login page.",
    type: "registry:block",
    registryDependencies: ["button", "card", "input", "label"],
    files: [
      {
        path: "blocks/login-05/page.tsx",
        target: "app/login/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/login-05/components/login-form.tsx",
        type: "registry:component",
      },
    ],
    categories: ["authentication", "login"],
  },
  {
    name: "demo",
    description: "A demo of this library",
    type: "registry:block",
    registryDependencies: [
      "button",
      "card",
      "chart",
      "calendar",
      "input",
      "label",
      "checkbox",
      "radio-group",
      "textarea",
      "avatar",
      "command",
      "dialog",
      "tooltip",
      "dropdown-menu",
      "table",
      "popover",
      "select",
    ],
    dependencies: [
      "recharts",
      "@tanstack/react-table",
      "date-fns",
      "lucide-react",
    ],
    files: [
      {
        path: "blocks/demo/index.tsx",
        target: "components/demo/index.tsx",
        type: "registry:block",
      },
      {
        path: "blocks/demo/activity-goal.tsx",
        target: "components/demo/activity-goal.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/demo/calendar.tsx",
        target: "components/demo/calendar.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/demo/chat.tsx",
        target: "components/demo/chat.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/demo/cookie-settings.tsx",
        target: "components/demo/cookie-settings.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/demo/create-account.tsx",
        target: "components/demo/create-account.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/demo/exercise-minutes.tsx",
        target: "components/demo/exercise-minutes.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/demo/forms.tsx",
        target: "components/demo/forms.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/demo/payment-method.tsx",
        target: "components/demo/payment-method.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/demo/payments.tsx",
        target: "components/demo/payments.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/demo/report-issue.tsx",
        target: "components/demo/report-issue.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/demo/share.tsx",
        target: "components/demo/share.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/demo/stats.tsx",
        target: "components/demo/stats.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/demo/team-members.tsx",
        target: "components/demo/team-members.tsx",
        type: "registry:component",
      },
    ],
    categories: ["page-layout"],
  },
]
