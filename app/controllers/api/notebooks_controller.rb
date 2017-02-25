class Api::NotebooksController < ApplicationController

  def index
    @notebooks = Notebook.all
    render :index
  end

  def show
    @notebook = Notebook.find_by(id: notebook_params[:id])
  end

  def create
    @notebook = Notebook.new(notebook_params)
      if @notebook.save
        render :show
      else
        render @notebook.errors.full_messages, status: 422
      end
  end

  def update

  end

  def destroy

  end

  private
    def notebook_params
      params.require(:notebook).permit(:id, :title, :description, :author_id)
    end

end
