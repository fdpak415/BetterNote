class Api::NotebooksController < ApplicationController

  def index
    @user = current_user
    @notebooks = @user.notebooks
    render :index
  end

  def show
    @notebook = Notebook.find(notebook_params[:id])
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

    @notebook = Notebook.find(notebook_params[:id])
      if @notebook.update!(notebook_params)
        render :show
      else
        render @notebook.errors.full_messages, status: 422
      end
  end

  def destroy
    @notebook = Notebook.find(notebook_params[:id])
    @notebook.destroy!
      render :show
  end

  private
    def notebook_params
      params.require(:notebook).permit(:id, :title, :author_id)
    end

end
