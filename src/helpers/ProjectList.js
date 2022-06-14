import ImgCRM from "../images/CRM-APP.png";
import ImgCripto from "../images/Criptos.png";
import ImgPresupuesto from "../images/control.png";

export const ProjectList = [
  {
    name: "Crm React",
    image: ImgCRM,
    description:
      "This is a SPA made with react, react-router-dom, tailwindin the backend part we use json-server",
    skills: "React, Formik, Yup, Tailwind",
    url: "https://github.com/eliasbenavides/crm-app",
  },
  {
    name: "Cryptocurrency Quoter",
    image: ImgCripto,
    description:
      "This is a SPA made with react, styled components and we consume an external api",
    skills: "React, Styled Components, Api",
    url: "https://github.com/eliasbenavides/CotizadorCriptos",
  },
  {
    name: "Budget Control",
    image: ImgPresupuesto,
    description: "With this application we can control budgets in a better way",
    skills: "React, Hooks, Validations",
    url: "https://github.com/eliasbenavides/proyecto-control-presupuesto",
  },
];
