# Meu Website

## Tarefas

- Conteúdo

  - [x] Página inicial
  - [/] Página sobre
  - [x] Página serviços
  - [x] Página portfolio
  - [x] Página contato
  - ```html
    <!-- Contact Section -->
    <section class="contact section" id="contact">
      <div class="container">
        <div class="row">
          <div class="section-title padd-15">
            <h2>Contate-me</h2>
          </div>
        </div>
        <div class="row">
          <!-- contact-info-item  -->
          <div class="contact-info-item padd-15">
            <div class="icon">
              <i class="fa fa-phone"></i>
              <h4>Telefone</h4>
              <p>+55 38 988146300</p>
            </div>
          </div>
          <!-- contact-info-item end -->
          <!-- contact-info-item  -->
          <div class="contact-info-item padd-15">
            <div class="icon">
              <i class="fa fa-map-marker"></i>
              <h4>Localização</h4>
              <p>Montes Claros, Minas Gerais, Brasil</p>
            </div>
          </div>
          <!-- contact-info-item end -->
          <!-- contact-info-item  -->
          <div class="contact-info-item padd-15">
            <div class="icon">
              <i class="fa fa-envelope"></i>
              <h4>E-mail</h4>
              <p>danielfilho.web@gmail.com</p>
            </div>
          </div>
          <!-- contact-info-item end -->
        </div>
        <!-- Contact Form -->
        <div class="row">
          <form id="contact-form" action="#" class="contact-form padd-15">
            <div class="row">
              <div class="form-item col-6 padd-15">
                <div class="form-group">
                  <input
                    type="text"
                    name="name"
                    class="form-control"
                    placeholder="Seu nome*"
                    required
                  />
                </div>
              </div>
              <div class="form-item col-6 padd-15">
                <div class="form-group">
                  <input
                    type="email"
                    name="email"
                    class="form-control"
                    placeholder="Seu e-mail*"
                    required
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="form-item col-12 padd-15">
                <div class="form-group">
                  <input
                    type="text"
                    name="subject"
                    class="form-control"
                    placeholder="Assunto*"
                    required
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="form-item col-12 padd-15">
                <div class="form-group">
                  <textarea
                    class="form-control"
                    name="message"
                    placeholder="Sua Mensagem...*"
                    required
                  ></textarea>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12 padd-15">
                <button type="submit" class="btn btn_loading">
                  Enviar mensagem
                </button>
              </div>
            </div>
          </form>
        </div>
        <!-- Contact Form End -->
      </div>
    </section>
    <!-- Contact Section End -->
    <!-- Alert Success -->
    <div class="alert-box hide hidden">
      <p>Teste</p>
      <span class="close-alert">&times;</span>
    </div>
    <!-- Alert Success End -->
    ```

  - [x] Live demo

- Funcionalidades
  - [ ] Multilingual js - [Api GeoLocalização](https://ip-api.com/docs/api:json)
  - [x] Enviar e-mail de contato - [Api SMTP JS](https://www.smtpjs.com/) - [Tutorial](https://pepipost.com/tutorials/how-to-send-emails-with-javascript/)
