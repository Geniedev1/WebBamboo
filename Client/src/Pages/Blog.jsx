import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import  {Header } from '../Component/Header';
import { Footer } from "../Component/Footer";
export const Blog = () => {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      <Header />
      <Headerlink />
      <MainContent />
      <BackToTop />
      <Footer />
    </div>
  );
};

// const Header = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   return (
//     <header className="sticky top-0 z-50 bg-white shadow-md">
//       <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//         <a href="#" className="text-2xl font-bold">HONO</a>
        
//         <nav className={`${mobileMenuOpen ? 'block' : 'hidden'} md:block`}>
//           <ul className="md:flex space-y-4 md:space-y-0 md:space-x-6">
//             <NavItem text="HOME" hasDropdown />
//             <NavItem text="SHOP" hasDropdown />
//             <NavItem text="BLOG" hasDropdown />
//             <NavItem text="PAGES" hasDropdown />
//             <NavItem text="ABOUT US" />
//             <NavItem text="CONTACT US" />
//           </ul>
//         </nav>
        
//         <div className="flex items-center space-x-4">
//           <IconWithBadge icon="far fa-heart" count={0} />
//           <IconWithBadge icon="fas fa-shopping-bag" count={0} />
//           <a href="#" className="text-gray-800">
//             <i className="fas fa-search"></i>
//           </a>
//           <button 
//             className="md:hidden text-gray-800" 
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//           >
//             <i className="fas fa-bars"></i>
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// };

const Headerlink = () => {
  return (
    <div class ="bg-mint m-full h-[350px]"></div>
  );
};
const MainContent = () => {
  return (
    <div className="mt-32 container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <Sidebar />
        <BlogContent />
      </div>
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="w-full md:w-1/4">
      <SearchSection />
      <CategoriesSection />
      <TagsSection />
      <MetaSection />
    </div>
  );
};
const Taskbar = () => {
  return (
    <div className="my-4 flex items-end  w-full ">
      <div className="h-[5px] w-[50px] md:w-[100px] bg-green-500"></div>
      <div className="h-[2px] flex-1 bg-gray-200"></div>
    </div>
  );
};

const SearchSection = () => {
  return (
    <div className="mb-8">
      <h3 className = "font-bold text-3xl">SEARCH</h3>
      <Taskbar />
      <form className="relative">
        <input 
          type="text" 
          placeholder="Search..." 
          className="w-full px-4 py-2 border border-gray-300 rounded"
        />
        <button 
          type="submit" 
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
        >
          <i className="fas fa-search"></i>
        </button>
      </form>
    </div>
  );
};

const CategoriesSection = () => {
  const categories = [
    'Audio', 'Company', 'Gallery', 'Other', 
    'Travel', 'Uncategorized', 'Video', 'Wordpress'
  ];

  return (
    <div className="mb-8">
     <h3 className = "font-bold text-3xl">CATEGORIES </h3>
     <Taskbar />
      <ul className="space-y-2">
        {categories.map((category, index) => (
          <li key={index}>
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">
              {category}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const TagsSection = () => {
  const tags = ['Technology', 'Information', 'Wordpress', 'Devs', 'Program'];

  return (
    <div className="mb-8">
        <h3 className = "font-bold text-3xl">TAGS </h3>
        <Taskbar />
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <a 
            key={index}
            href="#" 
            className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded hover:bg-gray-300 transition-colors"
          >
            {tag}
          </a>
        ))}
      </div>
    </div>
  );
};

const MetaSection = () => {
  return (
    <div className="mb-8">
  <h3 className = "font-bold text-3xl">META </h3>
  <Taskbar /> 
      {/* Meta content goes here */}
    </div>
  );
};

const BlogContent = () => {
  return (
    <div className="w-full md:w-3/4">
      <article className="bg-white rounded-lg overflow-hidden shadow">
        <img 
          src="https://via.placeholder.com/800x350" 
          alt="Modern bedroom interior" 
          className="w-full h-96 object-cover"
        />
        
        <div className="p-6">
          <div className="text-gray-500 text-sm mb-4">
            <span className="mr-4">POSTED BY: ADMIN</span>
            <span>ON: APRIL 24, 2018</span>
          </div>
          
          <h1 className="text-2xl font-bold mb-6">Blog Image Post</h1>
          
          <div className="text-gray-600 leading-relaxed mb-8">
            <p className="mb-4">
              Aenean et tempor eros, vitae sollicitudin velit. Etiam varius enim nec quam tempor, sed efficitur ex ultrices. Phasellus pretium est vel dui vestibulum condimentum. Aenean nec suscipit nibh. Phasellus nec lacus id arcu facilisis elementum. Curabitur lobortis, elit ut elementum congue, erat ex bibendum odio, nec iaculis lacus sem non lorem. Duis suscipit metus ante, sed convallis quam posuere quis. Ut tincidunt eleifend odio, ac fringilla mi vehicula nec. Nunc vitae lacus eget lectus imperdiet tempus sed in dui. Nam molestie magna at risus consectetur, placerat suscipit justo dignissim. Sed vitae fringilla enim, nec ullamcorper arcu.
            </p>
            
            <blockquote className="bg-gray-50 border-l-4 border-green-500 p-4 my-6 italic text-gray-600">
              Quisque semper nunc vitae erat pellentesque, ac placerat arcu consectetur. In venenatis elit ac ultrices convallis. Duis est nisi, tincidunt ac urna sed, cursus blandit lectus. In ullamcorper sit amet ligula ut eleifend. Proin dictum tempor ligula, ac feugiat metus. Sed finibus tortor eu scelerisque scelerisque.
            </blockquote>
            
            <p>
              Aenean et tempor eros, vitae sollicitudin velit. Etiam varius enim nec quam tempor, sed efficitur ex ultrices. Phasellus pretium est vel dui vestibulum condimentum. Aenean nec suscipit nibh. Phasellus nec lacus id arcu facilisis elementum.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

const BackToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button 
      onClick={scrollToTop}
      className="fixed right-6 bottom-6 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity"
    >
      <i className="fas fa-arrow-up"></i>
    </button>
  );
};


export default Blog;