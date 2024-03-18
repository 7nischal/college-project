import { useState } from "react";
import { createUsers } from "../services/black/user-services";
import { useNavigate } from "react-router-dom";

const CreateAccount = () => {
    const navigate = useNavigate();
    const [formState, setFormState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = (data: any) => {
        setIsSubmitting(true);
        let user = {
            name: data.firstName + ' ' + data.lastName,
            email: data.email,
            username: data.firstName + '_' + data.lastName,
            phone: data.phone,
            password: data.password,
            passwordConfirm: data.confirmPassword
        }
        createUsers(user).then((res) => {
            navigate('/login');
        });
    };
    
    const validateForm = () => {
        if (!formState.firstName || !formState.lastName || !formState.email || !formState.password || (formState.password !== formState.confirmPassword)) {
            return false;
        }

        return true;
    };

    return (
        <>
            <section className="mx-auto py-16">
                <div>
                    <div
                        className="w-11/12 m-auto md:w-3/5 sm:w-4/5 lg:w-2/5 overflow-hidden rounded-xl bg-white text-slate-500 shadow-md shadow-slate-200 mt-12 p-6"
                    >
                        <h2
                            className="text-2xl font-bold text-gray-800 text-center my-6 "
                        >
                            Create Account
                        </h2>

                        <div
                            className="flex flex-col space-y-4"
                        >
                            <div className="relative my-6">
                                <label 
                                    htmlFor="id-b03"
                                    className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                                >
                                    First Name 
                                    <strong
                                        className="text-pink-500"
                                    >
                                         *
                                    </strong>
                                </label>
                                <input
                                    id="id-b03"
                                    type="text"
                                    name="id-b03"
                                    placeholder="First Name"
                                    className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                                    value={formState.firstName}
                                    onChange={(e) => setFormState({ ...formState, firstName: e.target.value })}
                                />
                            </div>

                            <div className="relative my-6">
                                <label 
                                    htmlFor="id-b03"
                                    className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                                >
                                    Last Name
                                    <strong
                                        className="text-pink-500"
                                    >
                                         *
                                    </strong>
                                </label>
                                <input
                                    id="id-b03"
                                    type="text"
                                    name="id-b03"
                                    placeholder="Last Name"
                                    className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                                    value={formState.lastName}
                                    onChange={(e) => setFormState({ ...formState, lastName: e.target.value })}
                                />
                            </div>

                            <div className="relative my-6">
                                <label 
                                    htmlFor="id-b03"
                                    className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                                >
                                    Email
                                    <strong
                                        className="text-pink-500"
                                    >
                                         *
                                    </strong>
                                </label>
                                <input
                                    id="id-b03"
                                    type="email"
                                    name="id-b03"
                                    placeholder="Email"
                                    className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                                    value={formState.email}
                                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                />
                            </div>

                            <div className="relative my-6">
                                <label 
                                    htmlFor="id-b03"
                                    className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                                >
                                    Password 
                                    <strong
                                        className="text-pink-500"
                                    >
                                         *
                                    </strong>
                                </label>
                                <input
                                    id="id-b03"
                                    type="password"
                                    name="id-b03"
                                    placeholder="Password"
                                    className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                                    value={formState.password}
                                    onChange={(e) => setFormState({ ...formState, password: e.target.value })}
                                />


                            </div>

                            <div className="relative my-6">
                                <label 
                                    htmlFor="id-b03"
                                    className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                                >
                                    Confirm Password 
                                    <strong
                                        className="text-pink-500"
                                    >
                                         *
                                    </strong>
                                </label>
                                <input
                                    id="id-b03"
                                    type="password"
                                    name="id-b03"
                                    placeholder="Confirm Password"
                                    className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                                    value={formState.confirmPassword}
                                    onChange={(e) => setFormState({ ...formState, confirmPassword: e.target.value })}
                                />
                            </div>

                            <div className="relative my-6">
                                <label 
                                    htmlFor="id-b03"
                                    className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                                >
                                    Phone
                                </label>
                                <input
                                    id="id-b03"
                                    type="tel"
                                    name="id-b03"
                                    placeholder="Phone"
                                    className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                                    value={formState.phone}
                                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                                />
                            </div>
                        </div>

                        <div
                            className="flex justify-center items-center space-x-4"
                        >
                            <button
                                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all duration-300 ease-in-out my-6 disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed"
                                disabled={!validateForm() || isSubmitting}
                                onClick={() => onSubmit(formState)}
                            >
                                Create Account
                            </button>
                        </div>

                    </div>

                </div>
            </section>
        </>
    );
};

export default CreateAccount;