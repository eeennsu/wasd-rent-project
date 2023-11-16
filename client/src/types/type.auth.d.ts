// signUp API의 매개변수 회원가입할 때 필요한 유저 정보를 담고 있음
interface SignUpUser extends LoginUser {
    user_name: string;
    user_email: string;
    user_student_number: string;
    department_id: string;
}

// 서버에서 응답받는 모든 유저에 대한 속성이 담겨 있음
interface DetailUser {
    user_id: string;
    user_pw: string;
    user_email: string;
    user_name: string;
    user_student_number: string;
    user_created_at: string;
    user_license: number;
    department_id: number;
    manager_approval: boolean;
}

// signUp API의 response
interface ResSignUp {
    "200": OK;
    suc: string | boolean;
    result: DetailUser;
    error?: string;
}

// login API의 매개변수
interface LoginUser {
    user_id: string;
    user_pw: string;
}

// login API의 response
interface ResLogin {
    suc: boolean;
    login:{
        user_id: string;
        user_pw: string;
        user_email: string;
        user_student_number: number;
        user_name: string;
        user_created_at: string;
        user_license: number;
        department_id: number;
    },
    token:{
        token: string
    }
    err?: string;
}

// searchId API의 매개변수
interface SearchId {
    user_name: string;
    user_email: string;
    user_student_number: string;
}

// searchID API의 response
interface ResSearchId {
    '200': OK;
    result: string;
}

// checkId API의 매개변수
interface CheckId {
    user_id: string;
}

// checkId API의 response
interface ResCheckId {
    '200': OK;
    result: string;
}

interface ApproveUser {
    user_id: string;
}

interface ResApproveUser {
    '200': OK;
    result: string;
}

// changePW API의 매개변수
interface ChangePw {
    user_pw: string;
}

// changePW API의 response
interface ResChangePw {
    '200': OK;
    result: string;
}

interface ResListPendingUsers {
    '200': OK;
    result: DetailUser[];           // DetailUser의 배열
}

// sendMail API의 매개변수
interface SendMail {
    user_email: string;
}

// sendMail API의 response
interface ResSendMail {
    '200': OK,
    result: {
        toEmail: string;
        code: number;
    }
}

// 유저 디비에 있는 모든 정보 불러오기 api의 response
interface ResUserTableAll {
    '200': OK;
    result: DetailUser[];           // DetailUser의 배열
}