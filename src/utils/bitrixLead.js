const BITRIX_WEBHOOK = "https://colba.bitrix24.kz/rest/17/26223axyuok2wj2u";
const LEAD_SOURCE = "REPEAT_SALE";

export const BITRIX_FIELDS = {
  fullName: "UF_CRM_LEAD_1753906771051",
  filial: "UF_CRM_1729075562007",
  filialText: "UF_CRM_QASIFILIALDAO",
  branchText: "UF_CRM_BRANCH",
};

export const BITRIX_FILIAL_IDS = {
  chilonzor: "637",
  yunusobod: "921",
  sergeli: "493",
};

export async function sendLeadToBitrix({
  name,
  phone,
  filial,
  lang = "uz",
  sourceLabel = "Registration",
  city = "Toshkent",
}) {
  const url = `${BITRIX_WEBHOOK}/crm.lead.add.json`;
  const body = new FormData();
  const filialLabel = filial?.label || "Tanlanmagan";

  body.append("fields[TITLE]", `Colba — ${name} - WEB (${sourceLabel})`);
  body.append("fields[NAME]", name);
  body.append(`fields[${BITRIX_FIELDS.fullName}]`, name);
  body.append("fields[PHONE][0][VALUE]", phone);
  body.append("fields[PHONE][0][VALUE_TYPE]", "WORK");
  body.append("fields[SOURCE_ID]", LEAD_SOURCE);
  body.append("fields[SOURCE_DESCRIPTION]", sourceLabel);
  body.append(
    "fields[COMMENTS]",
    `Forma: ${sourceLabel} | Til: ${lang === "uz" ? "O'zbek" : "Rus"} | Shahar: ${city} | Filial: ${filialLabel} | Sayt: Colba`
  );
  body.append("fields[STATUS_ID]", "NEW");

  if (filial) {
    body.append(`fields[${BITRIX_FIELDS.filialText}]`, filialLabel);
    body.append(`fields[${BITRIX_FIELDS.branchText}]`, filialLabel);
  }

  if (filial?.bitrixId) {
    body.append(`fields[${BITRIX_FIELDS.filial}]`, filial.bitrixId);
  }

  const res = await fetch(url, { method: "POST", body });
  if (!res.ok) throw new Error(`Bitrix error: ${res.status}`);
  return res.json();
}
