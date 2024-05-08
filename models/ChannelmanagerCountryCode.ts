/**
 * Channel Manager Service
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.0.0
 * Contact: info@gemini-commerce.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export enum ChannelmanagerCountryCode {
    Unknown = 'COUNTRY_CODE_UNKNOWN',
    Ad = 'COUNTRY_CODE_AD',
    Ae = 'COUNTRY_CODE_AE',
    Af = 'COUNTRY_CODE_AF',
    Ag = 'COUNTRY_CODE_AG',
    Ai = 'COUNTRY_CODE_AI',
    Al = 'COUNTRY_CODE_AL',
    Am = 'COUNTRY_CODE_AM',
    Ao = 'COUNTRY_CODE_AO',
    Aq = 'COUNTRY_CODE_AQ',
    Ar = 'COUNTRY_CODE_AR',
    As = 'COUNTRY_CODE_AS',
    At = 'COUNTRY_CODE_AT',
    Au = 'COUNTRY_CODE_AU',
    Aw = 'COUNTRY_CODE_AW',
    Ax = 'COUNTRY_CODE_AX',
    Az = 'COUNTRY_CODE_AZ',
    Ba = 'COUNTRY_CODE_BA',
    Bb = 'COUNTRY_CODE_BB',
    Bd = 'COUNTRY_CODE_BD',
    Be = 'COUNTRY_CODE_BE',
    Bf = 'COUNTRY_CODE_BF',
    Bg = 'COUNTRY_CODE_BG',
    Bh = 'COUNTRY_CODE_BH',
    Bi = 'COUNTRY_CODE_BI',
    Bj = 'COUNTRY_CODE_BJ',
    Bl = 'COUNTRY_CODE_BL',
    Bm = 'COUNTRY_CODE_BM',
    Bn = 'COUNTRY_CODE_BN',
    Bo = 'COUNTRY_CODE_BO',
    Bq = 'COUNTRY_CODE_BQ',
    Br = 'COUNTRY_CODE_BR',
    Bs = 'COUNTRY_CODE_BS',
    Bt = 'COUNTRY_CODE_BT',
    Bv = 'COUNTRY_CODE_BV',
    Bw = 'COUNTRY_CODE_BW',
    By = 'COUNTRY_CODE_BY',
    Bz = 'COUNTRY_CODE_BZ',
    Ca = 'COUNTRY_CODE_CA',
    Cc = 'COUNTRY_CODE_CC',
    Cd = 'COUNTRY_CODE_CD',
    Cf = 'COUNTRY_CODE_CF',
    Cg = 'COUNTRY_CODE_CG',
    Ch = 'COUNTRY_CODE_CH',
    Ci = 'COUNTRY_CODE_CI',
    Ck = 'COUNTRY_CODE_CK',
    Cl = 'COUNTRY_CODE_CL',
    Cm = 'COUNTRY_CODE_CM',
    Cn = 'COUNTRY_CODE_CN',
    Co = 'COUNTRY_CODE_CO',
    Cr = 'COUNTRY_CODE_CR',
    Cu = 'COUNTRY_CODE_CU',
    Cv = 'COUNTRY_CODE_CV',
    Cw = 'COUNTRY_CODE_CW',
    Cx = 'COUNTRY_CODE_CX',
    Cy = 'COUNTRY_CODE_CY',
    Cz = 'COUNTRY_CODE_CZ',
    De = 'COUNTRY_CODE_DE',
    Dj = 'COUNTRY_CODE_DJ',
    Dk = 'COUNTRY_CODE_DK',
    Dm = 'COUNTRY_CODE_DM',
    Do = 'COUNTRY_CODE_DO',
    Dz = 'COUNTRY_CODE_DZ',
    Ec = 'COUNTRY_CODE_EC',
    Ee = 'COUNTRY_CODE_EE',
    Eg = 'COUNTRY_CODE_EG',
    Eh = 'COUNTRY_CODE_EH',
    Er = 'COUNTRY_CODE_ER',
    Es = 'COUNTRY_CODE_ES',
    Et = 'COUNTRY_CODE_ET',
    Fi = 'COUNTRY_CODE_FI',
    Fj = 'COUNTRY_CODE_FJ',
    Fk = 'COUNTRY_CODE_FK',
    Fm = 'COUNTRY_CODE_FM',
    Fo = 'COUNTRY_CODE_FO',
    Fr = 'COUNTRY_CODE_FR',
    Ga = 'COUNTRY_CODE_GA',
    Gb = 'COUNTRY_CODE_GB',
    Gd = 'COUNTRY_CODE_GD',
    Ge = 'COUNTRY_CODE_GE',
    Gf = 'COUNTRY_CODE_GF',
    Gg = 'COUNTRY_CODE_GG',
    Gh = 'COUNTRY_CODE_GH',
    Gi = 'COUNTRY_CODE_GI',
    Gl = 'COUNTRY_CODE_GL',
    Gm = 'COUNTRY_CODE_GM',
    Gn = 'COUNTRY_CODE_GN',
    Gp = 'COUNTRY_CODE_GP',
    Gq = 'COUNTRY_CODE_GQ',
    Gr = 'COUNTRY_CODE_GR',
    Gs = 'COUNTRY_CODE_GS',
    Gt = 'COUNTRY_CODE_GT',
    Gu = 'COUNTRY_CODE_GU',
    Gw = 'COUNTRY_CODE_GW',
    Gy = 'COUNTRY_CODE_GY',
    Hk = 'COUNTRY_CODE_HK',
    Hm = 'COUNTRY_CODE_HM',
    Hn = 'COUNTRY_CODE_HN',
    Hr = 'COUNTRY_CODE_HR',
    Ht = 'COUNTRY_CODE_HT',
    Hu = 'COUNTRY_CODE_HU',
    Id = 'COUNTRY_CODE_ID',
    Ie = 'COUNTRY_CODE_IE',
    Il = 'COUNTRY_CODE_IL',
    Im = 'COUNTRY_CODE_IM',
    In = 'COUNTRY_CODE_IN',
    Io = 'COUNTRY_CODE_IO',
    Iq = 'COUNTRY_CODE_IQ',
    Ir = 'COUNTRY_CODE_IR',
    Is = 'COUNTRY_CODE_IS',
    It = 'COUNTRY_CODE_IT',
    Je = 'COUNTRY_CODE_JE',
    Jm = 'COUNTRY_CODE_JM',
    Jo = 'COUNTRY_CODE_JO',
    Jp = 'COUNTRY_CODE_JP',
    Ke = 'COUNTRY_CODE_KE',
    Kg = 'COUNTRY_CODE_KG',
    Kh = 'COUNTRY_CODE_KH',
    Ki = 'COUNTRY_CODE_KI',
    Km = 'COUNTRY_CODE_KM',
    Kn = 'COUNTRY_CODE_KN',
    Kp = 'COUNTRY_CODE_KP',
    Kr = 'COUNTRY_CODE_KR',
    Kw = 'COUNTRY_CODE_KW',
    Ky = 'COUNTRY_CODE_KY',
    Kz = 'COUNTRY_CODE_KZ',
    La = 'COUNTRY_CODE_LA',
    Lb = 'COUNTRY_CODE_LB',
    Lc = 'COUNTRY_CODE_LC',
    Li = 'COUNTRY_CODE_LI',
    Lk = 'COUNTRY_CODE_LK',
    Lr = 'COUNTRY_CODE_LR',
    Ls = 'COUNTRY_CODE_LS',
    Lt = 'COUNTRY_CODE_LT',
    Lu = 'COUNTRY_CODE_LU',
    Lv = 'COUNTRY_CODE_LV',
    Ly = 'COUNTRY_CODE_LY',
    Ma = 'COUNTRY_CODE_MA',
    Mc = 'COUNTRY_CODE_MC',
    Md = 'COUNTRY_CODE_MD',
    Me = 'COUNTRY_CODE_ME',
    Mf = 'COUNTRY_CODE_MF',
    Mg = 'COUNTRY_CODE_MG',
    Mh = 'COUNTRY_CODE_MH',
    Mk = 'COUNTRY_CODE_MK',
    Ml = 'COUNTRY_CODE_ML',
    Mm = 'COUNTRY_CODE_MM',
    Mn = 'COUNTRY_CODE_MN',
    Mo = 'COUNTRY_CODE_MO',
    Mp = 'COUNTRY_CODE_MP',
    Mq = 'COUNTRY_CODE_MQ',
    Mr = 'COUNTRY_CODE_MR',
    Ms = 'COUNTRY_CODE_MS',
    Mt = 'COUNTRY_CODE_MT',
    Mu = 'COUNTRY_CODE_MU',
    Mv = 'COUNTRY_CODE_MV',
    Mw = 'COUNTRY_CODE_MW',
    Mx = 'COUNTRY_CODE_MX',
    My = 'COUNTRY_CODE_MY',
    Mz = 'COUNTRY_CODE_MZ',
    Na = 'COUNTRY_CODE_NA',
    Nc = 'COUNTRY_CODE_NC',
    Ne = 'COUNTRY_CODE_NE',
    Nf = 'COUNTRY_CODE_NF',
    Ng = 'COUNTRY_CODE_NG',
    Ni = 'COUNTRY_CODE_NI',
    Nl = 'COUNTRY_CODE_NL',
    No = 'COUNTRY_CODE_NO',
    Np = 'COUNTRY_CODE_NP',
    Nr = 'COUNTRY_CODE_NR',
    Nu = 'COUNTRY_CODE_NU',
    Nz = 'COUNTRY_CODE_NZ',
    Om = 'COUNTRY_CODE_OM',
    Pa = 'COUNTRY_CODE_PA',
    Pe = 'COUNTRY_CODE_PE',
    Pf = 'COUNTRY_CODE_PF',
    Pg = 'COUNTRY_CODE_PG',
    Ph = 'COUNTRY_CODE_PH',
    Pk = 'COUNTRY_CODE_PK',
    Pl = 'COUNTRY_CODE_PL',
    Pm = 'COUNTRY_CODE_PM',
    Pn = 'COUNTRY_CODE_PN',
    Pr = 'COUNTRY_CODE_PR',
    Ps = 'COUNTRY_CODE_PS',
    Pt = 'COUNTRY_CODE_PT',
    Pw = 'COUNTRY_CODE_PW',
    Py = 'COUNTRY_CODE_PY',
    Qa = 'COUNTRY_CODE_QA',
    Re = 'COUNTRY_CODE_RE',
    Ro = 'COUNTRY_CODE_RO',
    Rs = 'COUNTRY_CODE_RS',
    Ru = 'COUNTRY_CODE_RU',
    Rw = 'COUNTRY_CODE_RW',
    Sa = 'COUNTRY_CODE_SA',
    Sb = 'COUNTRY_CODE_SB',
    Sc = 'COUNTRY_CODE_SC',
    Sd = 'COUNTRY_CODE_SD',
    Se = 'COUNTRY_CODE_SE',
    Sg = 'COUNTRY_CODE_SG',
    Sh = 'COUNTRY_CODE_SH',
    Si = 'COUNTRY_CODE_SI',
    Sj = 'COUNTRY_CODE_SJ',
    Sk = 'COUNTRY_CODE_SK',
    Sl = 'COUNTRY_CODE_SL',
    Sm = 'COUNTRY_CODE_SM',
    Sn = 'COUNTRY_CODE_SN',
    So = 'COUNTRY_CODE_SO',
    Sr = 'COUNTRY_CODE_SR',
    Ss = 'COUNTRY_CODE_SS',
    St = 'COUNTRY_CODE_ST',
    Sv = 'COUNTRY_CODE_SV',
    Sx = 'COUNTRY_CODE_SX',
    Sy = 'COUNTRY_CODE_SY',
    Sz = 'COUNTRY_CODE_SZ',
    Tc = 'COUNTRY_CODE_TC',
    Td = 'COUNTRY_CODE_TD',
    Tf = 'COUNTRY_CODE_TF',
    Tg = 'COUNTRY_CODE_TG',
    Th = 'COUNTRY_CODE_TH',
    Tj = 'COUNTRY_CODE_TJ',
    Tk = 'COUNTRY_CODE_TK',
    Tl = 'COUNTRY_CODE_TL',
    Tm = 'COUNTRY_CODE_TM',
    Tn = 'COUNTRY_CODE_TN',
    To = 'COUNTRY_CODE_TO',
    Tr = 'COUNTRY_CODE_TR',
    Tt = 'COUNTRY_CODE_TT',
    Tv = 'COUNTRY_CODE_TV',
    Tw = 'COUNTRY_CODE_TW',
    Tz = 'COUNTRY_CODE_TZ',
    Ua = 'COUNTRY_CODE_UA',
    Ug = 'COUNTRY_CODE_UG',
    Um = 'COUNTRY_CODE_UM',
    Us = 'COUNTRY_CODE_US',
    Uy = 'COUNTRY_CODE_UY',
    Uz = 'COUNTRY_CODE_UZ',
    Va = 'COUNTRY_CODE_VA',
    Vc = 'COUNTRY_CODE_VC',
    Ve = 'COUNTRY_CODE_VE',
    Vg = 'COUNTRY_CODE_VG',
    Vi = 'COUNTRY_CODE_VI',
    Vn = 'COUNTRY_CODE_VN',
    Vu = 'COUNTRY_CODE_VU',
    Wf = 'COUNTRY_CODE_WF',
    Ws = 'COUNTRY_CODE_WS',
    Ye = 'COUNTRY_CODE_YE',
    Yt = 'COUNTRY_CODE_YT',
    Za = 'COUNTRY_CODE_ZA',
    Zm = 'COUNTRY_CODE_ZM',
    Zw = 'COUNTRY_CODE_ZW',
    Xk = 'COUNTRY_CODE_XK'
}
