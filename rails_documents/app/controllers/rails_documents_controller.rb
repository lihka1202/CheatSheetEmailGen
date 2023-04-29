class RailsDocumentsController < ApplicationController
  before_action :set_rails_document, only: %i[ show update destroy ]

  # GET /rails_documents
  def index
    @rails_documents = RailsDocument.all

    render json: @rails_documents
  end

  # GET /rails_documents/1
  def show
    render json: @rails_document
  end

  # POST /rails_documents
  def create
    @rails_document = RailsDocument.new(rails_document_params)

    if @rails_document.save
      render json: @rails_document, status: :created, location: @rails_document
    else
      render json: @rails_document.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /rails_documents/1
  def update
    if @rails_document.update(rails_document_params)
      render json: @rails_document
    else
      render json: @rails_document.errors, status: :unprocessable_entity
    end
  end

  # DELETE /rails_documents/1
  def destroy
    @rails_document.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_rails_document
      @rails_document = RailsDocument.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def rails_document_params
      params.fetch(:rails_document, {})
    end
end
