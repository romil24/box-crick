import React from 'react'
import TopNavbar from './TopNavbar/TopNavbar'
import Header from './Navbar/Header'

function Blog() {
	return (
		<div>
			<TopNavbar />
			<Header />
			<section className="py-5">
				<div className="container">
					<div className="row justify-content-center text-center mb-4 mb-md-5">
						<div className="col-xl-9 col-xxl-8">
							<span className="text-muted">Read More</span>
							<h2 className="display-5 fw-bold">Our Blog</h2>
							<p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
						</div>
					</div>
					<div className="row gy-4">
						{/* Blog Post 1 */}
						<div className="col-md-4">
							<div className="shadow p-4">
								<div className="text-muted">
									10.10.2017
								</div>
								<h2 className="fw-semibold text-primary mt-1">
									<a className="text-primary text-decoration-none" href="">A short engaging title</a>
								</h2>
								<img src="https://via.placeholder.com/300x200?text=Box+Cricket+Image" alt="Box Cricket" className="img-fluid mt-3" />
								<p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum congue risus sit amet dictum malesuada. Vestibulum viverra iaculis turpis, vitae varius lectus imperdiet at. Sed ultrices, ante vitae maximus laoreet, magna quam tincidunt ex, non faucibus justo dui commodo libero.</p>
							</div>
						</div>
						{/* Blog Post 2 */}
						<div className="col-md-4">
							<div className="shadow p-4">
								<div className="text-muted">
									10.10.2017
								</div>
								<h2 className="fw-semibold text-primary mt-1">
									<a className="text-primary text-decoration-none" href="">A short engaging title</a>
								</h2>
								<img src="https://via.placeholder.com/300x200?text=Box+Cricket+Image" alt="Box Cricket" className="img-fluid mt-3" />
								<p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum congue risus sit amet dictum malesuada. Vestibulum viverra iaculis turpis, vitae varius lectus imperdiet at. Sed ultrices, ante vitae maximus laoreet, magna quam tincidunt ex, non faucibus justo dui commodo libero.</p>
							</div>
						</div>
						{/* Blog Post 3 */}
						<div className="col-md-4">
							<div className="shadow p-4">
								<div className="text-muted">
									10.10.2017
								</div>
								<h2 className="fw-semibold text-primary mt-1">
									<a className="text-primary text-decoration-none" href="">A short engaging title</a>
								</h2>
								<img src="https://via.placeholder.com/300x200?text=Box+Cricket+Image" alt="Box Cricket" className="img-fluid mt-3" />
								<p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum congue risus sit amet dictum malesuada. Vestibulum viverra iaculis turpis, vitae varius lectus imperdiet at. Sed ultrices, ante vitae maximus laoreet, magna quam tincidunt ex, non faucibus justo dui commodo libero.</p>
							</div>
						</div>
					</div>
					<div className="col-md-2 d-grid mx-auto mt-5">
						<a className="btn btn-primary btn-lg" href="">Learn more</a>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Blog
