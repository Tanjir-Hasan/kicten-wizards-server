import React from 'react';
import Pdf from "react-to-pdf";
const ref = React.createRef();

const Blog = () => {
    return (
        <>
            <Pdf targetRef={ref} filename="blogs.pdf">
                {({ toPdf }) => <button onClick={toPdf} className='text-slate-800 ms-10 mt-2 btn bg-[#e19a3c] hover:bg-[#f2bc71]'>Download Pdf</button>}
            </Pdf>
            <div className='px-8' ref={ref}>
                <h1 className='text-5xl font-semibold text-[#f18701] text-center my-10'>Q&A about <span className='text-[#0077b6] underline underline-offset-4'>React</span></h1>
                <h3 className='text-2xl font-mono text-rose-500'>Question 1</h3>
                <p className='mb-2'>What is the differences between uncontrolled and controlled components?</p>
                <p className='text-2xl font-mono text-[#0F1D22]'>Answer:</p>
                <p className='text-[#1b4332] mx-6 mb-6'>In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally. They use a ref to access the DOM element's current value and update the state accordingly.
                </p>
                <ul>
                    <li className='list-inside list-disc'>A controlled functional component is a component that receives its current value and update callback via props.</li>
                    <li className='list-inside list-disc'>An uncontrolled functional component is a component that maintains its own internal state.</li>
                </ul>
                <h3 className='text-2xl font-mono text-rose-500'>Question 2</h3>
                <p className='mb-2'>How to validate React props using PropTypes?</p>
                <p className='text-2xl font-mono text-[#0F1D22]'>Answer:</p>
                <p className='text-[#1b4332] mx-6 mb-6'>propTypes is used for props validation. If some of the props aren't using the correct type that we assigned, we will get a console warning. After we specify validation patterns, we will set App. defaultProps.</p>
                <h3 className='text-2xl font-mono text-rose-500'>Question 3</h3>
                <p className='mb-2'>What is the difference between nodejs and express js?</p>
                <p className='text-2xl font-mono text-[#0F1D22]'>Answer:</p>
                <p className='text-[#1b4332] mx-6 mb-6'>Express is a minimal and flexible node.js web application framework, providing a robust set of features for building single and multi-page, and hybrid web applications. On the other hand, Node.js is detailed as "A platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications".</p>
                <h3 className='text-2xl font-mono text-rose-500'>Question 4</h3>
                <p className='mb-2'>What is a custom hook, and why will you create a custom hook?</p>
                <p className='text-2xl font-mono text-[#0F1D22]'>Answer:</p>
                <p className='text-[#1b4332] mx-6 mb-6'>Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.</p>
            </div>
        </>
    );
};

export default Blog;